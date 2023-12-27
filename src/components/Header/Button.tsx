import { FunctionComponent, ReactElement } from 'react';

type ButtonProps = {
	active: ReactElement;
	inactive: ReactElement;
	isActive: boolean;
	isEnabled?: boolean;
	notificationEnabled?: boolean;
	handleClick: () => void;
};

export const Button: FunctionComponent<ButtonProps> = ({
	active,
	inactive,
	isActive,
	isEnabled = true,
	notificationEnabled = false,
	handleClick,
}) => {
	if (isEnabled) {
		return (
			<button
				className='text-2xl md:text-3xl text-rustyred relative'
				onClick={handleClick}
			>
				{notificationEnabled && (
					<>
						<span className='absolute block w-1.5 h-1.5 -top-0 -right-1 bg-rustyred rounded-full animate-ping' />
						<span className='absolute block w-1.5 h-1.5 -top-0 -right-1 bg-rustyred rounded-full opacity-95' />
					</>
				)}
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
