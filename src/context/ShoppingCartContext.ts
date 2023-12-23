import { createContext } from 'react';
import { ShoppingCart } from '../types/';

type ShoppingCartContextType = {
	shoppingCart: ShoppingCart;
	updateShoppingCart: (products: ShoppingCart) => void;
};

export const ShoppingCartContext = createContext<ShoppingCartContextType>({
	shoppingCart: {},
	updateShoppingCart: () => {},
});
