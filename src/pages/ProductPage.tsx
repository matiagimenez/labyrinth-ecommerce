import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { Loader, ProductInformation } from '../components';
import { ProductDetail } from '../components/Product/ProductDetail';
import { useEffect, useState } from 'react';
import { Product } from '../types';
import { getProductById } from '../data/asyncProducts';
import { FaArrowLeftLong } from 'react-icons/fa6';

export const ProductPage = () => {
	const [product, setProduct] = useState<Product>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { productId } = useParams();
	const navigate = useNavigate();

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
					<button
						onClick={() => navigate(-1)}
						className='pl-12 pt-8 font-medium text-rustyred flex items-center gap-2 hover:underline underline-offset-4 group'
					>
						<span className='group-hover:-translate-x-1 transition-transform'>
							<FaArrowLeftLong />
						</span>
						Return to catalog
					</button>
					<ProductDetail product={product} />
					<ProductInformation product={product} />
				</>
			)}
		</>
	);
};
