export abstract class DiscountStrategy {
  protected discount = 0;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class FiftyPercentDiscount extends DiscountStrategy {
  protected readonly discount = 0.5;
}

export class TenPercentDiscount extends DiscountStrategy {
  protected readonly discount = 0.1;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class NoDiscount extends DiscountStrategy {}
