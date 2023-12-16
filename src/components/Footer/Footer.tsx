import { FunctionComponent } from 'react';
import { SubscribeForm } from '.';

export const Footer: FunctionComponent = () => {
	return (
		<footer>
			<SubscribeForm />
			<hr />
			<p className='w-full text-center py-[20px] text-sm md:text-base'>
				Built with 🧉 & <span className='text-rustyred'>❤</span> by
				<a
					className='ml-1 text-rustyred font-semibold cursor-pointer hover:underline'
					href='https://github.com/matiasgimenezdev'
					target='_blank'
				>
					Matías Giménez
				</a>
			</p>
		</footer>
	);
};
