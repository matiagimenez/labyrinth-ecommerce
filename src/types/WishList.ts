import { Product } from './Product';

export type WishList = {
	[id: string]: { product: Product };
};
