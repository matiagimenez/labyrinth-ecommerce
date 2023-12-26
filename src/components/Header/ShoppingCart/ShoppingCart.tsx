import { FunctionComponent, useContext, useState } from 'react';
import { ShoppingCartItem, Button, MenuList } from '..';
import { PiShoppingCart, PiShoppingCartFill } from 'react-icons/pi';
import { ShoppingCartContext } from '../../../context/ShoppingCartContext';

export const ShoppingCart: FunctionComponent = () => {
	const [isOpen, setIsOpen] = useState(false);

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
		if (nextShoppingCart[id].amount === 0) delete nextShoppingCart[id];
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
			/>
			<MenuList isOpen={isOpen}>
				{Object.keys(shoppingCart).map((key) => {
					const { product, amount } = shoppingCart[key];
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
			</MenuList>
		</>
	);
};
