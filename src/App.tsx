import { useState } from 'react';
import { PageLayout } from './layout';
import { HomePage, ErrorPage, ProductPage } from './pages/';
import { ShoppingCart, WishList } from './types';
import { ShoppingCartContext, WishListContext } from './context/';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
	const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({});
	const [wishList, setWishList] = useState<WishList>([]);

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
			path: '/product/:id',
			element: <ProductPage />,
			errorElement: <ErrorPage />,
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
