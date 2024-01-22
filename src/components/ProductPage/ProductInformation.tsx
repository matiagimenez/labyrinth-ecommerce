import { FunctionComponent } from 'react';
import { Product } from '../../types';
import { ProductFeatures } from './ProductFeatures';

type ProductInformationProps = {
	product: Product | undefined;
};

export const ProductInformation: FunctionComponent<ProductInformationProps> = ({
	product,
}) => {
	const src = `/product-images/${product?.id}-${product?.banner}`;
	return (
		<section className='max-w-[1000px] ml-auto mr-auto'>
			{product?.banner && (
				<img
					src={src}
					alt={`${product.name} banner`}
					className='hidden rounded-lg m-4 mb-0 w-full max-w-[95%] md:block xl:m-0 xl:max-w-full'
				/>
			)}
			<h2 className='text-rustyred font-semibold px-4 pt-6 pb-1 lg:px-0 text-2xl'>
				Product Information
			</h2>
			<p className='p-4 pt-1 max-w-full lg:p-0 lg:pb-4'>
				{product?.description}
			</p>
			{product?.features && <ProductFeatures product={product} />}
		</section>
	);
};
