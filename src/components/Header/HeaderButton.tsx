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
			className='mt-1 text-2xl text-rustyred'
			onClick={() => {
				setIsActive(!isActive);
			}}
		>
			{isActive ? active : inactive}
		</button>
	);
};
