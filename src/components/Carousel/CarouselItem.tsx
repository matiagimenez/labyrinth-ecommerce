import { FunctionComponent } from 'react';
import { Image } from '../../types';

type CarouselItemProps = {
	image: Image;
	current: number;
	handleItemClick: (id: number) => void;
};

export const CarouselItem: FunctionComponent<CarouselItemProps> = ({
	image,
	current,
	handleItemClick,
}) => {
	const { src, alt, href, id } = image;

	if (id === current) {
		return (
			<li>
				<p>
					<img
						src={src}
						alt={alt}
						className='w-[250px] lg:w-[300px]'
					/>
					<a
						href={href}
						className='bg-rustyred text-white py-2 w-[90px] rounded ml-auto mr-auto text-xs text-center block hover:opacity-90'
					>
						See detail
					</a>
				</p>
			</li>
		);
	}

	return (
		<li>
			<img
				src={src}
				alt={alt}
				className='w-[120px] cursor-pointer opacity-50 lg:w-[150px]'
				onClick={() => handleItemClick(id)}
			/>
		</li>
	);
};
