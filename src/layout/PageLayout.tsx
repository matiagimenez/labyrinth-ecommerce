import { FunctionComponent, ReactNode } from 'react';
import { Header, Footer } from '../components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type PageLayoutProps = {
	children: ReactNode;
};

export const PageLayout: FunctionComponent<PageLayoutProps> = ({
	children,
}) => {
	return (
		<>
			<Header />
			<main className='mt-[100px]'>{children}</main>
			<Footer />
			<ToastContainer
				position='bottom-right'
				autoClose={1500}
				closeOnClick
				theme='light'
				pauseOnHover
				hideProgressBar={false}
			/>
		</>
	);
};
