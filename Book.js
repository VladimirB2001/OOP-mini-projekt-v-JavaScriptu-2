// Book.js

export class Book {
    #price; // zapouzdřená vlastnost

    constructor(title, author, price, tags = []) {
        this.title = title;
        this.author = author;
        this.#price = price;
        this.tags = tags; // seznam – pole tagů
    }

    // Getter + setter pro zapouzdřenou cenu
    get price() {
        return this.#price;
    }

    set price(value) {
        if (value < 0) {
            console.warn("Cena nemůže být záporná. Nastavuji na 0.");
            this.#price = 0;
        } else {
            this.#price = value;
        }
    }

    // 1) Metoda vrací textový popis objektu
    getDescription() {
        return `Kniha "${this.title}" od autora ${this.author}. Cena: ${this.#price} Kč. Tagy: ${this.tags.join(", ")}`;
    }

    // 2) Metoda mění vnitřní stav (přidání tagu)
    addTag(tag) {
        this.tags.push(tag);
    }

    // 3) Metoda provede jednoduchý výpočet (sleva v %)
    applyDiscount(percent) {
        const discount = this.#price * (percent / 100);
        this.#price = Math.max(0, this.#price - discount);
        return this.#price;
    }
}
