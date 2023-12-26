import { FunctionComponent, ReactNode } from 'react';

type MenuListProps = {
	isOpen: boolean;
	children: ReactNode;
};

export const MenuList: FunctionComponent<MenuListProps> = ({
	isOpen,
	children,
}) => {
	return (
		<section
			className={`absolute min-h-[600px] 2xl:min-h-[800px]  border-2 w-full min-w-[300px] ${
				isOpen ? 'top-14 md:top-16' : '-top-[2000px]'
			} -right-12 md:-right-32 bg-white`}
		>
			{children}
		</section>
	);
};
