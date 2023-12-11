import { FunctionComponent, ReactNode } from 'react';
import { Header, Footer } from '../components';

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
		</>
	);
};
