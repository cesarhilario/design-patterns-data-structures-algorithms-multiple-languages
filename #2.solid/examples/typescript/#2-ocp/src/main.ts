import {
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from "./core/usecase/DiscountStrategy";
import { ShoppingCart } from "./core/usecase/ShoppingCart";
import { Product } from "./core/entities/Product";

const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();

const shoppingCart = new ShoppingCart(noDiscount);
const shoppingCartWithFiftyPercentDiscount = new ShoppingCart(
  fiftyPercentDiscount
);
const shoppingCartWithTenPercentDiscount = new ShoppingCart(tenPercentDiscount);

shoppingCart.addItem(new Product("Camiseta", 49.9));
shoppingCart.addItem(new Product("Caderno", 9.91));
shoppingCart.addItem(new Product("Lápis", 1.59));

shoppingCartWithFiftyPercentDiscount.addItem(new Product("Camiseta", 49.9));
shoppingCartWithFiftyPercentDiscount.addItem(new Product("Caderno", 9.91));
shoppingCartWithFiftyPercentDiscount.addItem(new Product("Lápis", 1.59));

shoppingCartWithTenPercentDiscount.addItem(new Product("Camiseta", 49.9));
shoppingCartWithTenPercentDiscount.addItem(new Product("Caderno", 9.91));
shoppingCartWithTenPercentDiscount.addItem(new Product("Lápis", 1.59));

console.log("total: ", shoppingCart.totalWithDiscount());
console.log("50%: ", shoppingCartWithFiftyPercentDiscount.totalWithDiscount());
console.log("10%: ", shoppingCartWithTenPercentDiscount.totalWithDiscount());
