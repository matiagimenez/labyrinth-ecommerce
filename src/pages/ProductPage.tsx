import { Navigate, useParams } from 'react-router-dom';
import { Loader, ProductInformation } from '../components';
import { ProductDetail } from '../components/Product/ProductDetail';
import { useEffect, useState } from 'react';
import { Product } from '../types';
import { getProductById } from '../data/asyncProducts';

export const ProductPage = () => {
	const [product, setProduct] = useState<Product>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { productId } = useParams();

	async function fetchProductData(id: string) {
		const currentProduct: Product = await getProductById(id);
		if (currentProduct) {
			setProduct(currentProduct);
			setIsLoading(false);
		} else {
			<Navigate to='/error' replace={true} />;
		}
	}

	useEffect(() => {
		if (productId) {
			setIsLoading(true);
			fetchProductData(productId);
		}
	}, [productId]);

	return (
		<>
			{isLoading ? (
				<div className='flex items-center justify-center min-h-[300px]'>
					<Loader />
				</div>
			) : (
				<>
					<ProductDetail product={product} />
					<ProductInformation product={product} />
				</>
			)}
		</>
	);
};
