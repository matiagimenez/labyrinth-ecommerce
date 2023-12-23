import { FunctionComponent, useContext, useEffect } from 'react';
import { Button, Tooltip } from '../..';
import { Product } from '../../../types';
import { PiShoppingCart, PiShoppingCartFill } from 'react-icons/pi';
import { formatPrice } from '../../../utils';
import { ShoppingCartContext } from '../../../context';
import { toast } from 'react-toastify';

type CatalogItemProps = {
	product: Product;
};

export const CatalogItem: FunctionComponent<CatalogItemProps> = ({
	product,
}) => {
	const { id, images, name, category, price, priceCurrency } = product;
	const src = `/product-images/${id}-${images[0]}`;

	const { shoppingCart, updateShoppingCart } =
		useContext(ShoppingCartContext);

	function handleUpdateShoppingCart(product: Product) {
		const amount = shoppingCart[product.id]
			? shoppingCart[product.id].amount + 1
			: 0;

		updateShoppingCart({
			...shoppingCart,
			[product.id]: {
				product,
				amount,
			},
		});
		toast.success('Item added to the cart');
	}

	useEffect(() => {
		console.log(shoppingCart);
	}, [shoppingCart]);

	return (
		<article className='relative overflow-hidden border-2 rounded-lg w-[100%] ml-auto mr-auto border-rustyred md:w-[95%]'>
			<span className='absolute top-2 right-2 bg-brightpink text-cyan-900 py-1 px-2 rounded-xl text-[11px] font-medium'>
				{category.toUpperCase()}
			</span>
			<figure>
				<img
					src={src}
					alt={name}
					className='h-[250px] ml-auto mr-auto p-2 xl:h-[240px]'
				/>
				<figcaption className='bg-rustyred text-white p-2 text-center text-nowrap font-semibold'>
					{name}
				</figcaption>
			</figure>

			<footer className='p-4 pr-8 flex justify-between items-center'>
				<span className='font-semibold text-green-500'>
					{priceCurrency} {formatPrice(price)}
				</span>
				<p className='relative group'>
					<Button
						active={<PiShoppingCartFill />}
						inactive={<PiShoppingCart />}
						isActive={false}
						handleClick={() => handleUpdateShoppingCart(product)}
					/>
					<Tooltip
						text='Add to cart'
						position='-right-6 bottom-[40px]'
					/>
				</p>
			</footer>
		</article>
	);
};
