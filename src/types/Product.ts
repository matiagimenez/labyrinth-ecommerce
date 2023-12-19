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
	features?: {
		cpu: {
			title: string;
			text: string;
		};
		ram: {
			title: string;
			text: string;
		};
		screen: {
			title: string;
			text: string;
		};
		gpu: {
			title: string;
			text: string;
		};
		storage: {
			title: string;
			text: string;
		};
		connectivity: {
			title: string;
			text: string;
		};
		os: {
			title: string;
			text: string;
		};
		ports: {
			title: string;
			text: string;
		};
		other: {
			title: string;
			text: string;
		};
		model: {
			title: string;
			text: string;
		};
		dimensions: {
			title: string;
			text: string;
		};
		usage: {
			title: string;
			text: string;
		};
	};
};
