import { PageLayout } from './layout';
import { HomePage, ErrorPage, ProductPage } from './pages/';
import { ShoppingCartProvider, WishListProvider } from './context/';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
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
		<ShoppingCartProvider>
			<WishListProvider>
				<PageLayout>
					<RouterProvider router={router} />
				</PageLayout>
			</WishListProvider>
		</ShoppingCartProvider>
	);
}

export default App;
