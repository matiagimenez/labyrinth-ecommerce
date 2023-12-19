import { FunctionComponent, useEffect, useState } from 'react';
import { Product } from '../../../types';
import { getProducts } from '../../../data/asyncProducts';
import { FiltersForm, ResultsMessage } from '../..';
import { CatalogItem } from './CatalogItem';

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
			<section className='grid px-6 grid-cols-1 justify-items-center gap-y-4 gap-x-4 mt-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
				{status === 'loading' && 'Loading...'}
				{status === 'searching' && 'Searching...'}
				{status === 'success' &&
					products.map((product) => {
						return (
							<CatalogItem key={product.id} product={product} />
						);
					})}
			</section>
		</section>
	);
};
