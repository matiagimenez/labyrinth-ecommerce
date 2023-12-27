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
			className={`absolute min-h-[500px] border-2 border-cyan-500 border-t-0 border-r-0 w-full min-w-[350px] sm:min-w-[450px] ${
				isOpen ? '-right-12 md:-right-32' : '-right-[2000px]'
			} top-14 md:top-16 bg-white flex flex-col justify-between transition-all duration-250 ease-in-out`}
		>
			{children}
		</section>
	);
};
