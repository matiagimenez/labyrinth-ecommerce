import { FunctionComponent } from 'react';
import { Button, Tooltip } from '../..';
import { Product } from '../../../types';
import { PiShoppingCart, PiShoppingCartFill } from 'react-icons/pi';

type CatalogItemProps = {
	product: Product;
};
export const CatalogItem: FunctionComponent<CatalogItemProps> = ({
	product,
}) => {
	const { id, images, name, category, price, priceCurrency } = product;
	const src = `/product-images/${id}-${images[0]}`;

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
				<span className='font-medium'>
					{priceCurrency} {price}
				</span>
				<p className='relative group'>
					<Button
						active={<PiShoppingCartFill />}
						inactive={<PiShoppingCart />}
						isActive={false}
						handleClick={() => {}}
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
