import { TbFaceIdError } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
	return (
		<section className='overflow-hidden justify-center relative flex flex-col items-center min-h-[480px]'>
			<p className='text-rustyred text-[250px]'>
				<TbFaceIdError />
			</p>
			<h2 className='text-rustyred font-bold text-4xl py-2'>ERROR 404</h2>
			<p className='text-rustyred font-medium text-2xl'>
				Sorry, the page not found
			</p>
			<Link
				to='/'
				className='text-white bg-rustyred rounded-3xl p-4 mt-4 px-12 hover:underline underline-offset-4'
			>
				Back to home
			</Link>
		</section>
	);
};
