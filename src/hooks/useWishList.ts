import { useContext } from 'react';
import { WishListContext } from '../context';
import { WishList, Product } from '../types';
import { toast } from 'react-toastify';

type useWishList = {
	wishList: WishList;
	handleRemoveWishListItem: (id: string) => void;
	handleAddWishListItem: (product: Product) => void;
};

export const useWishList = () => {
	const { wishList, updateWishList } = useContext(WishListContext);

	function handleRemoveWishListItem(id: string) {
		if (!wishList[id]) return;

		const nextWishList = { ...wishList };
		delete nextWishList[id];
		updateWishList(nextWishList);
		toast.info('Item removed from the wishlist');
	}

	function handleAddWishListItem(product: Product) {
		if (wishList[product.id]) return;

		if (Object.entries(wishList).length === 4) {
			return toast.error(
				'The wishlist can contain up to 4 different products'
			);
		}

		const nextWishList = { ...wishList, [product.id]: { product } };

		updateWishList(nextWishList);
		toast.success('Item added to the wishlist');
	}

	return { wishList, handleRemoveWishListItem, handleAddWishListItem };
};
