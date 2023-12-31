import { FunctionComponent } from 'react';
import { Button, Tooltip } from '../..';
import { Product } from '../../../types';
import { PiShoppingCart, PiShoppingCartFill } from 'react-icons/pi';
import { formatPrice } from '../../../utils';

import { Link } from 'react-router-dom';
import { useShoppingCart } from '../../../hooks';

type CatalogItemProps = {
	product: Product;
};

export const CatalogItem: FunctionComponent<CatalogItemProps> = ({
	product,
}) => {
	const { id, images, name, category, price, priceCurrency, stock } = product;

	const { handleAddShoppingCartItem } = useShoppingCart();

	return (
		<article className='relative overflow-hidden border-2 rounded-lg w-[100%] ml-auto mr-auto border-rustyred md:w-[95%]'>
			<span className='absolute top-2 right-2 bg-brightpink text-cyan-900 py-1 px-2 rounded-xl text-[11px] font-medium z-10'>
				{category.toUpperCase()}
			</span>
			<figure className='relative'>
				<Link to={`/product/${id}`}>
					<p className={stock !== 0 ? 'group' : 'group'}>
						<img
							src={`/product-images/${id}-${images[0]}`}
							alt={name}
							className='h-[250px] ml-auto mr-auto p-2 xl:h-[240px] group-hover:hidden'
						/>
						<img
							src={`/product-images/${id}-${images[1]}`}
							alt={name}
							className='h-[250px] hidden ml-auto mr-auto p-2 xl:h-[240px] group-hover:block'
						/>
					</p>

					<figcaption
						className={`bg-rustyred text-white p-2 text-center text-nowrap font-semibold hover:underline underline-offset-2`}
					>
						{name}
					</figcaption>
				</Link>
				{stock === 0 && (
					<p className='absolute bg-gray-600 border-1 w-full m-auto top-0 bottom-0 right-0 left-0 h-[40px] py-2 text-center text-white font-medium'>
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
						handleClick={() => handleAddShoppingCartItem(product)}
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
