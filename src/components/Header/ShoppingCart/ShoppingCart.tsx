import { FunctionComponent, useState } from 'react';
import { ShoppingCartItem, Button, ProductList } from '..';
import { PiShoppingCart, PiShoppingCartFill } from 'react-icons/pi';
import { formatPrice } from '../../../utils';
import { useShoppingCart } from '../../../hooks';

export const ShoppingCart: FunctionComponent = () => {
	const [isOpen, setIsOpen] = useState(false);
	const {
		shoppingCart,
		handleRemoveShoppingCartItem,
		handleUpdateShoppingCartItem,
		total,
	} = useShoppingCart();

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
			<ProductList isOpen={isOpen}>
				{Object.keys(shoppingCart).length > 0 ? (
					<section>
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
			</ProductList>
		</>
	);
};
