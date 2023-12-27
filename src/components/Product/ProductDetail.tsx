import { FunctionComponent } from 'react';
import { Product } from '../../types';

type ProductDetailProps = {
	product: Product | undefined;
};
export const ProductDetail: FunctionComponent<ProductDetailProps> = ({
	product,
}) => {
	return <div>{product?.name}</div>;
};
