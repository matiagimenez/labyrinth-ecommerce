import { FunctionComponent } from 'react';
import { Product } from '../../types';
import { VscHeart, VscHeartFilled } from 'react-icons/vsc';
import { Button, ProductImages } from '..';
import { formatPrice } from '../../utils';

type ProductDetailProps = {
	product: Product | undefined;
};
export const ProductDetail: FunctionComponent<ProductDetailProps> = ({
	product,
}) => {
	return (
		<section className='relative flex flex-col lg:flex-row max-w-[1000px] mr-auto ml-auto'>
			<ProductImages
				alt={product?.name}
				id={product?.id}
				images={product?.images}
			/>
			<section className='px-4'>
				<p className='flex items-center justify-between'>
					<span className='bg-brightpink inline-block w-fit my-2 text-cyan-900 py-1 px-2 rounded-xl text-[11px] font-medium'>
						{product?.category.toUpperCase()}
					</span>
					<span className='leading-none mr-8 lg:mr-48'>
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
				{/* //TODO: Add to cart button & amount input */}
			</section>
		</section>
	);
};
