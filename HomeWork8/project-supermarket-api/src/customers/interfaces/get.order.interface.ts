export interface GetOrderInterface {
  id: number;
  customerId: number;
  employeeId: number;
  orderAdress: string;
  deliveryCost: number;
  orderDate: Date;
  totalCost?: number;
}