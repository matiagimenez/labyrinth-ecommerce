import { FunctionComponent } from 'react';
import { Image } from '../../../types';

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
		rounded-xl pt-6 border md:min-w-[180px] md:max-w-[180px] xl:min-w-[220px] xl:max-w-[222px] 
	`;

	if (id === current) {
		return (
			<li
				className={`${styles} min-w-[330px] max-w-[330px] md:min-w-[300px] md:max-w-[340px] xl:min-w-[350px] xl:max-w-[352px] shadow-md hover:shadow-lg transition-opacity duration-300 block relative`}
			>
				<figure>
					<img
						src={src}
						alt={alt}
						className='ml-auto mr-auto w-[300px] md:w-[320px] xl:w-[270px] 2xl:w-[300px] px-4'
					/>
					<figcaption className='bg-cyan-700 pb-6 border border-cyan-500  rounded-b-xl px-4'>
						<p className='border-t w-auto pl-2 pt-4 text-lg pb-4 font-medium'>
							{alt}
						</p>
						<a
							href={href}
							className='bg-rustyred text-white py-2 ml-2 w-[120px] rounded text-xs text-center inline-block hover:opacity-90'
						>
							View details
						</a>
					</figcaption>
				</figure>
			</li>
		);
	}

	return (
		<li
			className={`${styles} cursor-pointer opacity-40 hidden ${
				current === id - 1 || current === id + 1
					? 'md:block'
					: 'md:hidden'
			} xl:block`}
			onClick={() => handleItemClick(id)}
		>
			<img
				src={src}
				alt={alt}
				className='select-text w-[180px] lg:w-[200px] ml-auto mr-auto block px-4'
			/>
			<section className='bg-cyan-800 pb-6 px-4'>
				<p className='py-2 opacity-30 p-2 text-sm xl:text-base pb-4 font-medium text-center'>
					{alt}
				</p>
				<a
					href={href}
					className='bg-rustyred hidden text-white py-2 w-[90px] rounded ml-auto mr-auto text-xs text-center hover:opacity-90'
				>
					See detail
				</a>
			</section>
		</li>
	);
};
