import { FunctionComponent, useState } from 'react';
import { toast } from 'react-toastify';

export const SubscribeForm: FunctionComponent = () => {
	const [email, setEmail] = useState<string>('');

	return (
		<section className='text-center mt-2'>
			<p className='font-semibold text-md w-[90%] m-auto md:text-xl'>
				Subscribe to out newsletter to get updates on our latest offers
			</p>
			<p className='font-extralight text-sm mt-1 w-[80%] m-auto md:text-base'>
				Get 10% off on your first order just by subscribir to our
				newsletter
			</p>
			<form className='mt-3 mb-3'>
				<input
					type='email'
					placeholder='Enter you email'
					className='p-2 border-2 rounded w-[60%] sm:w-[400px] outline-rustyred border-cyan'
					value={email}
					onChange={(event) => {
						setEmail(event.target.value);
					}}
				/>
				<button
					type='submit'
					className='ml-1 p-2 bg-rustyred border-2 border-rustyred text-white rounded hover:opacity-[.85] transition-opacity'
					onClick={(event) => {
						event.preventDefault();
						setEmail('');
						toast.success(
							'You successfully subscribed to the newsletter'
						);
					}}
				>
					Subscribe
				</button>
			</form>
			<p className='font-extralight text-md pb-5 md:text-base'>
				You will be able to unsubscribe at any time
			</p>
		</section>
	);
};
