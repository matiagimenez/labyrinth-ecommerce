import { FunctionComponent, ReactElement } from 'react';

type ButtonProps = {
	active: ReactElement;
	inactive: ReactElement;
	isActive: boolean;
	isEnabled?: boolean;
	handleClick: () => void;
};

export const Button: FunctionComponent<ButtonProps> = ({
	active,
	inactive,
	isActive,
	isEnabled = true,
	handleClick,
}) => {
	if (isEnabled) {
		return (
			<button
				className='text-2xl md:text-3xl text-rustyred'
				onClick={handleClick}
			>
				{isActive ? active : inactive}
			</button>
		);
	} else {
		return (
			<button
				className='text-2xl md:text-3xl text-gray-500 cursor-not-allowed'
				disabled
			>
				{inactive}
			</button>
		);
	}
};
