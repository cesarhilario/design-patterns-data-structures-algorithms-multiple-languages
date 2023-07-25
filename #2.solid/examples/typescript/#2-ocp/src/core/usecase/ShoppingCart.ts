import { CartItem } from "../../protocols/CartItem";
import { DiscountStrategy } from "./DiscountStrategy";

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discountStrategy: DiscountStrategy) {}

  public addItem(item: CartItem): void {
    this._items.push(item);
  }

  public removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  public total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  public totalWithDiscount(): number {
    return this.discountStrategy.calculate(this.total());
  }

  public isEmpty(): boolean {
    return this._items.length === 0;
  }

  public clear(): void {
    console.log("Carrinho de compras foi limpo");
    this._items.length = 0;
  }
}
