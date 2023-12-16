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
		rounded-xl pt-6 border
	`;

	if (id === current) {
		return (
			<li
				className={`${styles} shadow-md hover:shadow-lg transition-opacity duration-300 block relative`}
			>
				<img
					src={src}
					alt={alt}
					className='w-[300px] xl:w-[270px] 2xl:w-[300px] px-4'
				/>
				<section className='bg-cyan-700 pb-6 border border-cyan-500  rounded-b-xl px-4'>
					<p className='border-t w-auto pl-2 pt-4 text-lg pb-4 font-medium'>
						{alt}
					</p>
					<a
						href={href}
						className='bg-rustyred text-white py-2 ml-2 w-[120px] rounded text-xs text-center block hover:opacity-90'
					>
						View details
					</a>
					<button className='hidden xl:inline absolute bottom-8 right-8 text-rustyred text-2xl'>
						<VscHeart />
					</button>
				</section>
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
				className='w-[120px] lg:w-[150px] ml-auto mr-auto block  px-4'
			/>
			<section className='bg-cyan-800 pb-6 px-4'>
				<p className='py-2 opacity-30 p-2 pb-4 font-medium text-center'>
					{alt}
				</p>
				<a
					href={href}
					className='bg-rustyred hidden text-white py-2 w-[90px] rounded ml-auto mr-auto text-xs text-center  hover:opacity-90'
				>
					See detail
				</a>
			</section>
		</li>
	);
};
