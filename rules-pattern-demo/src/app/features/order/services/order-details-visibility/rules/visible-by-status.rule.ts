import { Rule } from "src/app/core/rule-engine";
import { OrderField, OrderStatus } from "../../../types";
import { OrderVisibilityContext } from "../types";
import { flatten, uniq } from 'lodash';

declare type StatusToFieldsMap {
  [key: OrderStatus]: OrderField[];
}

const visibleFieldsByStatusMap = {
  [OrderStatus.Draft]: ['type', 'totalCost', 'monthlyAmount'],
  [OrderStatus.Final]: ['type', 'totalCost', 'monthlyAmount'],
  [OrderStatus.Aprooved]: ['paymentMethod'],
  [OrderStatus.Paid]: ['id'],
  [OrderStatus.Delivered]: ['id'],
}

export class VisibleByStatusRule implements Rule<OrderVisibilityContext, boolean> {

  private applicableForFields: string[] = uniq(
    flatten(Object.values(visibleFieldsByStatusMap))
  );

  isApplicable(context: OrderVisibilityContext): boolean {
    return this.applicableForFields.includes(context.fieldName);
  }

  execute(context: OrderVisibilityContext): boolean {
    const status = context.orderState.order.status;
    return visibleFieldsByStatusMap[status] && visibleFieldsByStatusMap[status].includes(context.fieldName);
  }

}

