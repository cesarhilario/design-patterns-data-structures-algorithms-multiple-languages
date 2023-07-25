import { Messaging } from "./infra/Messaging";
import { Persistency } from "./infra/Persistency";
import { Order } from "./core/entities/Order";
import { ShoppingCart } from "./core/usecase/ShoppingCart";
import { Product } from "./core/entities/Product";

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product("Camiseta", 49.9));
shoppingCart.addItem(new Product("Caderno", 9.91));
shoppingCart.addItem(new Product("Lápis", 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());

console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
