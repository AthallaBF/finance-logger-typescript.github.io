export class Payment {
    //* Public, Private, and Readonly
    constructor(
    /** automatically assign properties inside of constructor by having public, etc.. infront of it */
    recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed ${this.amount} by ${this.details}`;
    }
}
