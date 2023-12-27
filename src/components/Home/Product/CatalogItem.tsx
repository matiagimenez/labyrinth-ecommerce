import { FunctionComponent, useContext } from 'react';
import { Button, Tooltip } from '../..';
import { Product } from '../../../types';
import { PiShoppingCart, PiShoppingCartFill } from 'react-icons/pi';
import { formatPrice } from '../../../utils';
import { ShoppingCartContext } from '../../../context';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

type CatalogItemProps = {
	product: Product;
};

export const CatalogItem: FunctionComponent<CatalogItemProps> = ({
	product,
}) => {
	const { id, images, name, category, price, priceCurrency, stock } = product;
	const src = `/product-images/${id}-${images[0]}`;

	const { shoppingCart, updateShoppingCart } =
		useContext(ShoppingCartContext);

	function handleUpdateShoppingCart(product: Product) {
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

		if (amount > stock) {
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

	return (
		<article className='relative overflow-hidden border-2 rounded-lg w-[100%] ml-auto mr-auto border-rustyred md:w-[95%]'>
			<span className='absolute top-2 right-2 bg-brightpink text-cyan-900 py-1 px-2 rounded-xl text-[11px] font-medium z-10'>
				{category.toUpperCase()}
			</span>
			<figure className='relative'>
				<Link to={`/product/${id}`}>
					<img
						src={src}
						alt={name}
						className='h-[250px] ml-auto mr-auto p-2 xl:h-[240px]'
					/>
					<figcaption
						className={`${
							stock > 0 ? 'bg-rustyred' : 'bg-gray-500'
						} text-white p-2 text-center text-nowrap font-semibold hover:underline underline-offset-2`}
					>
						{name}
					</figcaption>
				</Link>
				{stock === 0 && (
					<p className='absolute bg-gray-500 w-full top-[50%] py-4 text-center text-white font-semibold'>
						No stock available
					</p>
				)}
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
						isEnabled={stock > 0}
						handleClick={() => handleUpdateShoppingCart(product)}
					/>
					{product.stock > 0 && (
						<Tooltip
							text='Add to cart'
							position='-right-6 bottom-[40px]'
						/>
					)}
				</p>
			</footer>
		</article>
	);
};
