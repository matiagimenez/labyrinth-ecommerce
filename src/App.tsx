import { useState } from 'react';
import { PageLayout } from './layout';
import { HomePage, ErrorPage, ProductPage } from './pages/';
import { ShoppingCart, WishList } from './types';
import { ShoppingCartContext, WishListContext } from './context/';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { readLocalStorage } from './helpers';

function App() {
	const [shoppingCart, setShoppingCart] = useState<ShoppingCart>(() => {
		return JSON.parse(readLocalStorage('shopping-cart') ?? '{}');
	});

	const [wishList, setWishList] = useState<WishList>(() => {
		return JSON.parse(readLocalStorage('wish-list') ?? '{}');
	});

	function updateShoppingCart(products: ShoppingCart) {
		setShoppingCart(products);
	}

	function updateWishList(products: WishList) {
		setWishList(products);
	}

	const router = createBrowserRouter([
		{
			path: '/',
			element: <HomePage />,
		},
		{
			path: '/product/:productId',
			element: <ProductPage />,
			errorElement: <ErrorPage />,
		},
		{
			path: '/error',
			element: <ErrorPage />,
		},
		{
			path: '/*',
			element: <ErrorPage />,
		},
	]);

	return (
		<ShoppingCartContext.Provider
			value={{ shoppingCart, updateShoppingCart }}
		>
			<WishListContext.Provider value={{ wishList, updateWishList }}>
				<PageLayout>
					<RouterProvider router={router} />
				</PageLayout>
			</WishListContext.Provider>
		</ShoppingCartContext.Provider>
	);
}

export default App;
