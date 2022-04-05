import { HasFormatter } from "../interfaces/HasFormatter";

export class Payment implements HasFormatter {
	//* Public, Private, and Readonly
	constructor(
		/** automatically assign properties inside of constructor by having public, etc.. infront of it */
		readonly recipient: string,
		private details: string,
		public amount: number
	) {}

	format() {
		return `${this.recipient} is owed ${this.amount} by ${this.details}`;
	}
}
