import { Navigate, useParams } from 'react-router-dom';
import { ProductInformation } from '../components';
import { ProductDetail } from '../components/Product/ProductDetail';
import { useEffect, useState } from 'react';
import { Product } from '../types';
import { getProductById } from '../data/asyncProducts';

export const ProductPage = () => {
	const [product, setProduct] = useState<Product>();
	const { productId } = useParams();

	async function fetchProductData(id: string) {
		const currentProduct: Product = await getProductById(id);
		if (currentProduct) {
			setProduct(currentProduct);
		} else {
			<Navigate to='/error' replace={true} />;
		}
	}

	useEffect(() => {
		if (productId) {
			fetchProductData(productId);
		}
	}, [productId]);

	return (
		<>
			<ProductDetail product={product} />
			<ProductInformation product={product} />
		</>
	);
};
