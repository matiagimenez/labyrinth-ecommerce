import { FunctionComponent } from 'react';
import { Product } from '../../types';
import { VscHeart, VscHeartFilled } from 'react-icons/vsc';
import { Button, ProductImages } from '..';
import { formatPrice } from '../../utils';
import { useShoppingCart } from '../../hooks';

type ProductDetailProps = {
	product: Product | undefined;
};
export const ProductDetail: FunctionComponent<ProductDetailProps> = ({
	product,
}) => {
	const { handleAddShoppingCartItem } = useShoppingCart();

	return (
		<section className='relative flex flex-col xl:flex-row max-w-[1000px] mr-auto ml-auto'>
			<ProductImages
				alt={product?.name}
				id={product?.id}
				images={product?.images}
			/>
			<section className='px-4 flex flex-col xl:justify-center xl:pl-8 relative'>
				<p className='flex items-center justify-between py-4'>
					<span className='bg-brightpink inline-block w-fit my-2 text-cyan-900 py-1 px-2 rounded-xl text-[11px] font-medium'>
						{product?.category.toUpperCase()}
					</span>
					<span className='leading-none mr-12'>
						<Button
							active={<VscHeartFilled />}
							inactive={<VscHeart />}
							isActive={
								false /* TODO: Active if exists on wishlist */
							}
							handleClick={() => {
								{
									//TODO: Add to wishlist
								}
							}}
						/>
					</span>
					<span className='absolute hidden  inset-0 w-[500px] -z-10 text-cyan-600 font-bold text-6xl opacity-70 xl:block rotate-90 mb-8'>
						{product?.name.toLocaleUpperCase()}
					</span>
				</p>

				<p className='max-w-full text-xl'>
					<span className='font-bold block text-2xl'>
						{product?.name}
					</span>
					{product?.title.replace(product.name, '')}
				</p>
				<p className='py-1 text-rustyred text-xl font-bold'>
					{product?.priceCurrency}
					{product?.price && formatPrice(product?.price)}
				</p>
				<p className='font-medium'>Stock available: {product?.stock}</p>

				<button
					onClick={() => {
						if (!product) return;
						handleAddShoppingCartItem(product);
					}}
					className='bg-rustyred text-white p-2 w-2/3 rounded-lg border mt-4 border-rustyred hover:bg-transparent hover:text-rustyred transition-colors duration-300'
				>
					Add to cart
				</button>
			</section>
		</section>
	);
};
