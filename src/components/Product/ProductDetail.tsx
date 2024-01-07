import { FunctionComponent } from 'react';
import { Product } from '../../types';
import { VscHeart, VscHeartFilled } from 'react-icons/vsc';
import { Button, ProductImages } from '..';
import { formatPrice } from '../../utils';
import { useShoppingCart } from '../../hooks';
import { useWishList } from '../../hooks/useWishList';

type ProductDetailProps = {
	product: Product | undefined;
};
export const ProductDetail: FunctionComponent<ProductDetailProps> = ({
	product,
}) => {
	const { handleAddShoppingCartItem } = useShoppingCart();
	const { handleAddWishListItem, handleRemoveWishListItem, wishList } =
		useWishList();

	return (
		<section className='relative flex flex-col xl:flex-row max-w-[1000px] mr-auto ml-auto'>
			<ProductImages
				alt={product?.name}
				id={product?.id}
				images={product?.images}
			/>
			<section className='px-4 flex flex-col xl:justify-center xl:pl-8 relative'>
				<p className='flex items-center gap-6 pt-6'>
					<span className='bg-brightpink inline-block w-fit my-2 text-cyan-900 py-1 px-2 rounded-xl text-[11px] font-medium'>
						{product?.category.toUpperCase()}
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
				<p className='flex items-center gap-12 mt-4'>
					<button
						onClick={() => {
							if (!product) return;
							handleAddShoppingCartItem(product);
						}}
						className='bg-rustyred text-white p-2 w-[200px] rounded-lg border border-rustyred hover:bg-transparent hover:text-rustyred transition-colors duration-300'
					>
						Add to cart
					</button>
					<span className='leading-none mr-12 flex items-cente min-w-[40px]'>
						<Button
							active={<VscHeartFilled />}
							inactive={<VscHeart />}
							isActive={
								product !== undefined &&
								wishList[product.id] !== undefined
							}
							handleClick={() => {
								if (!product) return;
								if (wishList[product.id] !== undefined) {
									handleRemoveWishListItem(product.id);
								} else {
									handleAddWishListItem(product);
								}
							}}
						/>
					</span>
				</p>
			</section>
		</section>
	);
};
