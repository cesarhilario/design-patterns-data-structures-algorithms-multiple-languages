import { Messaging } from "../../infra/Messaging";
import { Persistency } from "../../infra/Persistency";
import { ShoppingCart } from "../usecase/ShoppingCart";

import { OrderStatus } from "../../protocols/OrderStatus";

export class Order {
  private _orderStatus: OrderStatus = "open";

  // TODO: Está quebrando a Dependency Inversion Principle
  constructor(
    private readonly shoppingCart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  public checkout(): void {
    if (this.shoppingCart.isEmpty()) {
      console.log("Seu carrinho está vazio");
      return;
    }

    this._orderStatus = "closed";

    // Delegate para a class de messaging
    this.messaging.sendMessage(
      `Seu pedido com total de ${this.shoppingCart.total()} foi recebido.`
    );
    this.persistency.saveOrder();
    this.shoppingCart.clear();
  }
}
