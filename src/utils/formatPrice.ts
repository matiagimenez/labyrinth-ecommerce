export function formatPrice(price: number): string {
	let formatedPrice = '';
	let result: number;
	let remainder: number = price;
	while (remainder > 1000) {
		result = Math.floor(remainder / 1000);
		remainder = remainder % 1000;
		if (result > 1000) {
			formatedPrice = formatedPrice
				? `${formatedPrice}.${formatPrice(result)}`
				: `${formatPrice(result)}`;
		} else {
			formatedPrice = formatedPrice
				? `${formatedPrice}.${result}`
				: `${result}`;
		}
	}
	formatedPrice = `${formatedPrice}.${remainder}`;

	return formatedPrice;
}
