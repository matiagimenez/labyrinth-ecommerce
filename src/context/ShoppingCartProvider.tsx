import { ReactElement, createContext, useState, useMemo } from 'react';
import { ShoppingCart } from '../types';
import { readLocalStorage } from '../helpers';

type ShoppingCartContextType = {
	shoppingCart: ShoppingCart;
	updateShoppingCart: (products: ShoppingCart) => void;
};

export const ShoppingCartContext = createContext<ShoppingCartContextType>({
	shoppingCart: {},
	updateShoppingCart: () => {},
});

export function ShoppingCartProvider({ children }: { children: ReactElement }) {
	const [shoppingCart, setShoppingCart] = useState<ShoppingCart>(() => {
		return JSON.parse(readLocalStorage('shopping-cart') ?? '{}');
	});

	const updateShoppingCart = (products: ShoppingCart) => {
		setShoppingCart(products);
	};

	const shoppingCartValue = useMemo(() => {
		return { shoppingCart, updateShoppingCart };
	}, [shoppingCart]);

	return (
		<ShoppingCartContext.Provider value={shoppingCartValue}>
			{children}
		</ShoppingCartContext.Provider>
	);
}
