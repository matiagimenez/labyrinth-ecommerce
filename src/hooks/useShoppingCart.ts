import { useContext } from 'react';
import { ShoppingCartContext } from '../context';
import { ShoppingCart } from '../types';
import { toast } from 'react-toastify';
import { Product } from '../types/Product';

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

	function handleRemoveShoppingCartItem(id: string) {
		const nextShoppingCart = { ...shoppingCart };
		delete nextShoppingCart[id];
		updateShoppingCart(nextShoppingCart);
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

		updateShoppingCart({
			...shoppingCart,
			[product.id]: {
				product,
				amount,
			},
		});
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
