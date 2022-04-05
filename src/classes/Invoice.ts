import { HasFormatter } from "../interfaces/HasFormatter";

export class Invoice implements HasFormatter {
	//* Public, Private, and Readonly
	constructor(
		/** automatically assign properties inside of constructor by having public, etc.. infront of it */
		readonly client: string,
		private details: string,
		public amount: number
	) {}

	format() {
		return `${this.client} owes ${this.amount} for ${this.details}`;
	}
}
