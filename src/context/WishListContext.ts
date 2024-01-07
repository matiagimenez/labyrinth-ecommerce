import { createContext } from 'react';
import { WishList } from '../types/';

type WishListContextType = {
	wishList: WishList;
	updateWishList: (products: WishList) => void;
};

export const WishListContext = createContext<WishListContextType>({
	wishList: {},
	updateWishList: () => {},
});
