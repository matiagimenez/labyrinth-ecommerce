import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { Product } from '../../../types';
import { getProducts } from '../../../data/asyncProducts';
import { FiltersForm, ResultsMessage, Loader, CatalogItem } from '../..';

type Form = {
	filter: string;
	minPrice: number;
	maxPrice: number;
	category: string;
};

const initialForm: Form = {
	filter: '',
	minPrice: 0,
	maxPrice: 999999999,
	category: 'all',
};

export const Catalog: FunctionComponent = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [status, setStatus] = useState<string>('idle');
	const [form, setForm] = useState<Form>(initialForm);

	const fetchProductsData = useCallback(async () => {
		setStatus('loading');
		const { filter, minPrice, maxPrice, category } = form;
		const productsData: Product[] = await getProducts(
			filter,
			minPrice,
			maxPrice,
			category
		);

		if (productsData.length > 0) {
			setProducts(productsData);
			setStatus('success');
		} else {
			setStatus('error');
		}
	}, [form]);

	function handleFormChange(property: string, value: string | number) {
		setForm({ ...form, [property]: value });
	}

	useEffect(() => {
		fetchProductsData();
	}, [fetchProductsData]);

	return (
		<section className='pt-24' id='Products'>
			<FiltersForm handleFormChange={handleFormChange} />
			{status === 'error' && <ResultsMessage amount={0} />}
			{status === 'success' && (
				<ResultsMessage amount={products.length} />
			)}
			<section className='grid px-6 min-w-[360px] max-w-[400px] w-[80%] ml-auto mr-auto sm:max-w-[100%] sm:w-auto sm:ml-0 grid-cols-1 justify-items-center gap-y-4 gap-x-4 mt-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
				{status === 'loading' && (
					<p className='text-center col-span-5 mt-8 w-auto'>
						<Loader />
					</p>
				)}
				{status === 'error' && (
					<p className='text-center col-span-5 mt-8 w-auto text-crimson-700  p-4 text-2xl font-semibold'>
						No results found
					</p>
				)}
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
