export default class OrderDTO {
  get customerId(): string {
    return this._customerId;
  }

  set customerId(value: string) {
    this._customerId = value;
  }
  get orderId(): string {
    return this._orderId;
  }

  set orderId(value: string) {
    this._orderId = value;
  }

  get orderDate(): string {
    return this._orderDate;
  }

  set orderDate(value: string) {
    this._orderDate = value;
  }
  constructor(orderId: string, orderDate: string, customerId: string) {
    this._orderId = orderId;
    this._orderDate = orderDate;
    this._customerId = customerId;
  }
  private _orderId: string;
  private _orderDate: string;
  private _customerId: string;
}
