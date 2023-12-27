import { FunctionComponent } from 'react';
import { Product } from '../../types';
import { ProductFeatures } from './ProductFeatures';

type ProductInformationProps = {
	product: Product | undefined;
};

export const ProductInformation: FunctionComponent<ProductInformationProps> = ({
	product,
}) => {
	return (
		<section className='max-w-[1000px] ml-auto mr-auto'>
			<h2 className='text-brightpink font-medium px-4 lg:px-0 text-xl md:text-2xl'>
				Product Information
			</h2>
			<p className='p-4 pt-1 max-w-full lg:p-0 lg:pb-4'>
				{product?.description}
			</p>
			<ProductFeatures product={product} />
		</section>
	);
};
