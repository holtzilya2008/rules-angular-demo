import { Rule } from "src/app/core/rule-engine";
import { OrderField, OrderStatus } from "../../../types";
import { OrderVisibilityContext } from "../types";

declare type StatusToFieldsMap {
  [key: OrderStatus]: OrderField[];
}

class VisibleByStatusRule implements Rule<OrderVisibilityContext> {

  private alwaysVisible: OrderField[] = ['productId', 'status', 'customerId'];

  private visibleFieldsByStatusMap = {
    [OrderStatus.Draft]: [...this.alwaysVisible, 'type', 'totalCost', 'monthlyAmount'],
    [OrderStatus.Final]: [...this.alwaysVisible, 'type', 'totalCost', 'monthlyAmount'],
    [OrderStatus.Aprooved]: [...this.alwaysVisible, 'paymentMethod'],
    [OrderStatus.Paid]: [...this.alwaysVisible, 'id'],
    [OrderStatus.Delivered]: [...this.alwaysVisible, 'id'],
  }

  isApplicable(context: OrderVisibilityContext): boolean {
    const status = context.orderState.order.status;
    const fieldName = context.fieldName;
    return (this.visibleFieldsByStatusMap[status]).includes(fieldName);
  }

}

const visibleByStatusRule = new VisibleByStatusRule();
export { visibleByStatusRule };

