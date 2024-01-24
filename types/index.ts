export {};
import { CoffeeTypes } from "../data/data";

declare global {
  interface CoffeeInterface {
    id: number;
    name: string;
    description: string;
    price: number;
    photo: string;
    tags: CoffeeTypes[];
  }
  interface CartCoffeeElement {
    coffee: CoffeeInterface;
    qtd: number;
  }
}
