export type Product = {
	id: string;
	title: string;
	name: string;
	category: string;
	brand: string;
	stock: number;
	price: number;
	priceCurrency: string;
	enabled: boolean;
	images: string[];
	banner: string;
	description: string;
	features: {
		[key: string]: {
			title: string;
			text: string[];
		};
	};
};
