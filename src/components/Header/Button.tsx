import { FunctionComponent, ReactElement } from 'react';

type ButtonProps = {
	active: ReactElement;
	inactive: ReactElement;
	isActive: boolean;
	handleClick: () => void;
};

export const Button: FunctionComponent<ButtonProps> = ({
	active,
	inactive,
	isActive,
	handleClick,
}) => {
	return (
		<button
			className='text-2xl md:text-3xl text-rustyred'
			onClick={handleClick}
		>
			{isActive ? active : inactive}
		</button>
	);
};
