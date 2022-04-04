import { OrderStatus } from "./enums/order-status.enum";
import { OrderType } from "./enums/order-type.enum"
import { PaymentMethod } from "./enums/payment-method.enum";

export interface Order {
  id: string;
  productId: number;
  type: OrderType;
  totalCost?: number;
  monthlyAmount?: number;
  status: OrderStatus;
  customerId: number;
  tax?: number;
  paymentMethod?: PaymentMethod;
}

export type OrderField = keyof Order | 'textSummary';
