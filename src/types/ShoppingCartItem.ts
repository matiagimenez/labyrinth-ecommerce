import { Product } from './Product';

export type ShoppingCart = {
	[id: string]: { product: Product; amount: number };
};
