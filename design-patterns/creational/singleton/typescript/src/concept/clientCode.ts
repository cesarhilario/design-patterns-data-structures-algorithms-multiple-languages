import { Singleton } from "./Singleton";

const instanceA = Singleton.instance;
const instanceB = Singleton.instance;

if (instanceA === instanceB) {
  console.log("Singleton Works");
} else {
  console.log("Singleton not works");
}
