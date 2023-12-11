import { FunctionComponent } from 'react';

type ButtonProps = {
	src: string;
	alt: string;
};

export const Button: FunctionComponent<ButtonProps> = ({ src, alt }) => {
	return (
		<button>
			<img src={src} className='w-[25px] sm:w-[32px]' alt={alt} />
		</button>
	);
};
