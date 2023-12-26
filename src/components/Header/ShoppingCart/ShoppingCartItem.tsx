import { FunctionComponent } from 'react';
import { Product } from '../../../types';

type ShoppingCartItemProps = {
	product: Product;
	amount: number;
	handleRemoveShoppingCartItem: (id: string) => void;
	handleUpdateShoppingCartItem: (id: string, amount: number) => void;
};

export const ShoppingCartItem: FunctionComponent<ShoppingCartItemProps> = ({
	product,
	amount,
	handleRemoveShoppingCartItem,
	handleUpdateShoppingCartItem,
}) => {
	return (
		<article>
			<p>
				{product.name} - {amount}
			</p>
			<button
				onClick={() => {
					handleRemoveShoppingCartItem(product.id);
				}}
			>
				X
			</button>
			<button
				onClick={() => {
					handleUpdateShoppingCartItem(product.id, -1);
				}}
			>
				-
			</button>
			<button
				onClick={() => {
					handleUpdateShoppingCartItem(product.id, 1);
				}}
			>
				+
			</button>
		</article>
	);
};
