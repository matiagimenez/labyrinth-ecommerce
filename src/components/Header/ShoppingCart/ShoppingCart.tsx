import { FunctionComponent, useContext, useState } from 'react';
import { ShoppingCartItem, Button, MenuList } from '..';
import { PiShoppingCart, PiShoppingCartFill } from 'react-icons/pi';
import { ShoppingCartContext } from '../../../context/ShoppingCartContext';
import { formatPrice } from '../../../utils';

export const ShoppingCart: FunctionComponent = () => {
	const [isOpen, setIsOpen] = useState(false);
	let total: number = 0.0;

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

	return (
		<>
			<Button
				active={<PiShoppingCartFill />}
				inactive={<PiShoppingCart />}
				isActive={isOpen}
				handleClick={() => {
					setIsOpen(!isOpen);
				}}
				notificationEnabled={Object.keys(shoppingCart).length > 0}
			/>
			<MenuList isOpen={isOpen}>
				{Object.keys(shoppingCart).length > 0 ? (
					<section>
						{Object.keys(shoppingCart).map((key) => {
							const { product, amount } = shoppingCart[key];
							total += product.price * amount;
							return (
								<ShoppingCartItem
									key={product.id}
									product={product}
									amount={amount}
									handleRemoveShoppingCartItem={
										handleRemoveShoppingCartItem
									}
									handleUpdateShoppingCartItem={
										handleUpdateShoppingCartItem
									}
								/>
							);
						})}
					</section>
				) : (
					<p className='py-24 text-center text-lg font-semibold text-rustyred'>
						The cart is empty
					</p>
				)}
				{
					<p className='text-center py-2 text-xl font-medium text-green-500'>
						$ {formatPrice(total)}
					</p>
				}
			</MenuList>
		</>
	);
};
