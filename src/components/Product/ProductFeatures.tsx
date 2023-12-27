import { FunctionComponent } from 'react';
import { Product } from '../../types';

type ProductFeaturesProps = {
	product: Product | undefined;
};

export const ProductFeatures: FunctionComponent<ProductFeaturesProps> = ({
	product,
}) => {
	if (!product?.features) return null;
	return (
		<section className='grid grid-cols-1 mx-4 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-full lg:ml-auto lg:mr-auto '>
			{Object.keys(product?.features).map((currentFeature: string) => {
				const src = `/feature-icons/${currentFeature}.png`;
				const { title, text } = product.features[currentFeature];
				return (
					<article
						key={`${product?.id}-${currentFeature}`}
						className='pt-4 pl-2 pb-2 relative border border-rustyred rounded-lg min-h-[200px]'
					>
						<img
							src={src}
							alt={`${currentFeature}-icon`}
							className='w-16 absolute right-1 top-1'
						/>
						<h3 className='text-rustyred font-semibold text-sm block pt-4 pl-2'>
							{title.toUpperCase()}
						</h3>

						<p className='p-2 text-sm'>
							{text.map((text: string, index: number) => {
								return (
									<span
										className='block'
										key={`${product?.id}-${currentFeature}-${index}`}
									>
										{text}
									</span>
								);
							})}
						</p>
					</article>
				);
			})}
		</section>
	);
};
