export class Invoice {
    //* Public, Private, and Readonly
    constructor(
    /** automatically assign properties inside of constructor by having public, etc.. infront of it */
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
