import { FunctionComponent, ReactNode } from 'react';
import { Header, Footer } from '../components';

type PageLayoutProps = {
	children: ReactNode;
};

export const PageLayout: FunctionComponent<PageLayoutProps> = ({
	children,
}) => {
	return (
		<main>
			<Header />
			{children}
			<Footer />
		</main>
	);
};
