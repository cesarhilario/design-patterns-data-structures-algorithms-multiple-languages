type CartItem = { name: string; price: number };
type OrderStatus = "open" | "closed";

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = "open";

  public addItem(item: CartItem): void {
    this._items.push(item);
  }

  public removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  public total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  public checkout(): void {
    if (this.isEmpty()) {
      console.log("Seu carrinho está vazio");
      return;
    }

    this._orderStatus = "closed";
    this.sendMessage(`Seu pedido com total de ${this.total()} foi recebido.`);
    this.saveOrder();
    this.clear();
  }

  private isEmpty(): boolean {
    return this._items.length === 0;
  }

  private sendMessage(message: string): void {
    console.log("Mensagem Enviada: ", message);
  }

  private clear(): void {
    console.log("Carrinho de compras foi limpo");
    this._items.length = 0;
  }

  private saveOrder(): void {
    console.log("Pedido salvo com sucesso...");
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: "Camiseta", price: 49.9 });
shoppingCart.addItem({ name: "Caderno", price: 9.91 });
shoppingCart.addItem({ name: "Lápis", price: 1.59 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());

console.log(shoppingCart.orderStatus);
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
