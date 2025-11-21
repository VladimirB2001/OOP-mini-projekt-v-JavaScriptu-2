// main.js

import { Book } from "./Book.js";

// Vytvoření instancí
const book1 = new Book("Hobit", "J.R.R. Tolkien", 350, ["fantasy", "classic"]);
const book2 = new Book("Clean Code", "Robert C. Martin", 750, ["programming"]);

// Volání metod
console.log(book1.getDescription());
book1.addTag("adventure");
console.log("Po přidání tagu:", book1.getDescription());
console.log("Cena po slevě 20 %:", book1.applyDiscount(20));

console.log("----------");

console.log(book2.getDescription());
book2.price = -100; // test zapouzdření
console.log("Po změně ceny:", book2.getDescription());
