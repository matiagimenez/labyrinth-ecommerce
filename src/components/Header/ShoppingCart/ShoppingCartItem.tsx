import { FunctionComponent } from 'react';
import { Product } from '../../../types';
import { FiTrash } from 'react-icons/fi';
import { formatPrice } from '../../../utils';

type ShoppingCartItemProps = {
	product: Product;
	amount: number;
	handleRemoveShoppingCartItem: (id: string) => void;
	handleUpdateShoppingCartItem: (id: string, amount: number) => void;
};

export const ShoppingCartItem: FunctionComponent<ShoppingCartItemProps> = ({
	product,
	amount,
	handleRemoveShoppingCartItem,
	handleUpdateShoppingCartItem,
}) => {
	const src = `/product-images/${product.id}-${product.images[0]}`;
	return (
		<article className='p-3 py-1 relative border-b-2 border-cyan'>
			<img
				src={src}
				alt={product.name}
				className='w-[60px] sm:w-[70px] inline-block'
			/>
			<p className='ml-3 inline-block w-fit font-medium text-xs sm:text-sm'>
				<span className='inline-block mr-2'>{product.name}</span>
				<span className='text-green-500 '>
					${formatPrice(amount * product.price)}
				</span>
			</p>
			<div className='mr-4 items-baseline flex justify-between'>
				<p>
					<button
						className='text-rustyred mr-3 py-2 text-2xl font-bold'
						onClick={() => {
							handleUpdateShoppingCartItem(product.id, -1);
						}}
					>
						-
					</button>
					<span className='border px-3 py-1 border-rustyred rounded-md'>
						{amount}
					</span>
					<button
						className='ml-3 py-2 text-rustyred text-xl font-bold'
						onClick={() => {
							handleUpdateShoppingCartItem(product.id, 1);
						}}
					>
						+
					</button>
				</p>

				<button
					className='text-rustyred px-3 mr-2 text-xl'
					onClick={() => {
						handleRemoveShoppingCartItem(product.id);
					}}
				>
					<FiTrash />
				</button>
			</div>
		</article>
	);
};
