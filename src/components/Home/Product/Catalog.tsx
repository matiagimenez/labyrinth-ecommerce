import { FunctionComponent, useEffect, useState } from 'react';
import { Product } from '../../../types';
import { getProducts } from '../../../data/asyncProducts';
import { Button, FiltersForm, ResultsMessage } from '../..';
import { PiShoppingCart, PiShoppingCartFill } from 'react-icons/pi';

export const Catalog: FunctionComponent = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [status, setStatus] = useState<string>('idle');

	const fetchProductsData = async () => {
		setStatus('loading');
		const productsData: Product[] = await getProducts();
		if (productsData.length > 0) {
			setProducts(productsData);
			setStatus('success');
		} else {
			setStatus('error');
		}
	};

	useEffect(() => {
		fetchProductsData();
	}, []);

	return (
		<section className='mt-8'>
			<h2 className='opacity-0'>Products</h2>
			<FiltersForm />
			{status === 'error' && <ResultsMessage amount={0} />}
			{status === 'success' && (
				<ResultsMessage amount={products.length} />
			)}
			{/* TODO: Replace flex with grid layout & add tags on top-right */}
			<section className='flex flex-row flex-wrap gap-4 mt-2'>
				{status === 'loading' && 'Loading...'}
				{status === 'searching' && 'Searching...'}
				{status === 'success' &&
					products.map((product) => {
						const src = `/product-images/${product.id}-${product.images[0]}`;
						return (
							<article
								key={product.id}
								className='overflow-hidden border-2 rounded-lg w-[85%] ml-auto mr-auto border-rustyred sm:w-[45%] lg:w-[30%] xl:w-[22%]'
							>
								<img
									src={src}
									alt={product.name}
									className='h-[300px] ml-auto mr-auto p-2 md:h-[200px]'
								/>
								<p className='bg-rustyred text-white p-4 text-center font-semibold'>
									{product.name}
								</p>
								<p className='p-6 pr-8 relative'>
									<span>
										{product.priceCurrency} {product.price}
									</span>
									<span className='absolute right-8'>
										<Button
											active={<PiShoppingCartFill />}
											inactive={<PiShoppingCart />}
											isActive={false}
											handleClick={() => {}}
										/>
									</span>
								</p>
							</article>
						);
					})}
			</section>
		</section>
	);
};
