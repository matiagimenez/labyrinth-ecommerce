import { FunctionComponent } from 'react';
import { Image } from '../../types';
// import { VscHeart, VscHeartFilled } from 'react-icons/vsc';
import { VscHeart } from 'react-icons/vsc';

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

	const styles: string = `
		rounded-xl p-6 pt-2 border
	`;

	if (id === current) {
		return (
			<li
				className={`${styles} shadow-md hover:shadow-xl transition-all duration-500 block relative`}
			>
				<img src={src} alt={alt} className='w-[220px] lg:w-[300px]' />
				<p className='py-2 pb-4 font-medium text-center'>{alt}</p>
				<a
					href={href}
					className='bg-rustyred text-white py-2 w-[120px] rounded ml-auto mr-auto text-xs text-center block hover:opacity-90'
				>
					See detail
				</a>
				<button className='absolute bottom-8 right-10 text-rustyred text-2xl'>
					<VscHeart />
				</button>
			</li>
		);
	}

	return (
		<li
			className={`${styles} cursor-pointer opacity-40 hidden md:block`}
			onClick={() => handleItemClick(id)}
		>
			<img
				src={src}
				alt={alt}
				className='w-[120px] lg:w-[150px] ml-auto mr-auto block'
			/>
			<p className='py-2 opacity-30 pb-4 font-medium text-center'>
				{alt}
			</p>
			<a
				href={href}
				className='bg-rustyred hidden text-white py-2 w-[90px] rounded ml-auto mr-auto text-xs text-center  hover:opacity-90'
			>
				See detail
			</a>
		</li>
	);
};
