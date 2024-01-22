import { useContext, useEffect } from 'react';
import { ShoppingCartContext } from '../context';
import { ShoppingCart } from '../types';
import { toast } from 'react-toastify';
import { Product } from '../types/Product';
import { readLocalStorage, saveLocalStorage } from '../helpers';

type useShoppingCartReturnTypes = {
	shoppingCart: ShoppingCart;
	handleRemoveShoppingCartItem: (id: string) => void;
	handleUpdateShoppingCartItem: (id: string, amount: number) => void;
	handleAddShoppingCartItem: (product: Product) => void;
	total: number;
};

export const useShoppingCart = (): useShoppingCartReturnTypes => {
	const { shoppingCart, updateShoppingCart } =
		useContext(ShoppingCartContext);

	const localStorageKey = 'shopping-cart';

	useEffect(() => {
		const broadcastChannel = new BroadcastChannel('shoppingCartUpdate');
		broadcastChannel.postMessage('Shopping cart update');
		return () => {
			broadcastChannel.close();
		};
	}, [shoppingCart]);

	useEffect(() => {
		const broadcastChannel = new BroadcastChannel('shoppingCartUpdate');
		broadcastChannel.onmessage = () => {
			updateShoppingCart(
				JSON.parse(readLocalStorage(localStorageKey) ?? '')
			);
		};

		return () => {
			broadcastChannel.close();
		};
	}, [updateShoppingCart]);

	function handleRemoveShoppingCartItem(id: string) {
		const nextShoppingCart = { ...shoppingCart };
		delete nextShoppingCart[id];
		updateShoppingCart(nextShoppingCart);
		saveLocalStorage(localStorageKey, JSON.stringify(nextShoppingCart));
	}

	function handleUpdateShoppingCartItem(id: string, amount: number) {
		const nextShoppingCart = { ...shoppingCart };
		nextShoppingCart[id].amount += amount;

		if (nextShoppingCart[id].amount === 0) {
			delete nextShoppingCart[id];
		}

		if (
			amount > 0 &&
			nextShoppingCart[id].product.stock < nextShoppingCart[id].amount
		) {
			nextShoppingCart[id].amount = nextShoppingCart[id].product.stock;
		}

		updateShoppingCart(nextShoppingCart);
		saveLocalStorage(localStorageKey, JSON.stringify(nextShoppingCart));
	}

	function handleAddShoppingCartItem(product: Product) {
		if (
			!shoppingCart[product.id] &&
			Object.entries(shoppingCart).length === 4
		) {
			return toast.error(
				'The cart can contain up to 4 different products'
			);
		}

		const amount = shoppingCart[product.id]
			? shoppingCart[product.id].amount + 1
			: 1;

		if (amount > product.stock) {
			return toast.error('There is no more stock available');
		}

		const nextShoppingCart = {
			...shoppingCart,
			[product.id]: {
				product,
				amount,
			},
		};
		updateShoppingCart(nextShoppingCart);
		saveLocalStorage(localStorageKey, JSON.stringify(nextShoppingCart));
		toast.success('Item added to the cart');
	}

	function calculateTotal() {
		let total: number = 0.0;
		Object.keys(shoppingCart).map((id) => {
			const { product, amount } = shoppingCart[id];
			total += amount * product.price;
		});

		return total;
	}

	return {
		shoppingCart,
		handleRemoveShoppingCartItem,
		handleUpdateShoppingCartItem,
		handleAddShoppingCartItem,
		total: calculateTotal(),
	};
};
