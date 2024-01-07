import { FunctionComponent } from 'react';
import { Product } from '../../types/Product';
import { formatPrice } from '../../utils';

type ProductDescriptionProps = {
	product: Product;
	amount?: number;
};

export const ProductDescription: FunctionComponent<ProductDescriptionProps> = ({
	product,
	amount = 1,
}) => {
	const src = `/product-images/${product.id}-${product.images[0]}`;

	return (
		<a href={`/product/${product.id}`}>
			<img
				src={src}
				alt={product.name}
				className='w-[60px] sm:w-[70px] inline-block'
			/>
			<p className='ml-3 inline-block w-fit font-medium text-xs sm:text-sm'>
				<span className='inline-block mr-2'>{product.name}</span>
				{amount && (
					<span className='text-green-500 '>
						${formatPrice(amount * product.price)}
					</span>
				)}
			</p>
		</a>
	);
};
