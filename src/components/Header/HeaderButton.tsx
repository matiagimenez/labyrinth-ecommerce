import { FunctionComponent, ReactElement, useState } from 'react';

type ButtonProps = {
	active: ReactElement;
	inactive: ReactElement;
};

export const HeaderButton: FunctionComponent<ButtonProps> = ({
	active,
	inactive,
}) => {
	const [isActive, setIsActive] = useState<boolean>(false);

	return (
		<button
			className='text-2xl md:text-3xl text-rustyred'
			onClick={() => {
				setIsActive(!isActive);
			}}
		>
			{isActive ? active : inactive}
		</button>
	);
};
