import { OrderState } from "../../../types/order-state";

export interface OrderVisibilityContext {
  orderState: OrderState;
  fieldName: string;
  isSummary: string;
}
