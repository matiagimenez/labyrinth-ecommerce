import {
	FunctionComponent,
	useId,
	useState,
	FormEvent,
	ChangeEvent,
} from 'react';
import { toast } from 'react-toastify';

export const SubscribeForm: FunctionComponent = () => {
	const id = useId();
	const [email, setEmail] = useState<string>('');

	const emailId = `email-${id}`;

	function handleSubmit(event: FormEvent<HTMLFormElement>): void {
		event.preventDefault();
		if (!email) return;

		toast.success('You successfully subscribed to the newsletter');
		setEmail('');
	}

	return (
		<section className='text-center mt-2 pb-4'>
			<p className='font-semibold text-md w-[90%] m-auto md:text-xl'>
				Subscribe to out newsletter to get updates on our latest offers
			</p>
			<p className='font-light mt-1 w-[80%] m-auto'>
				Get 10% off on your first order just by subscribing to our
				newsletter
			</p>
			<form
				className='mt-10 mb-3 relative ml-auto mr-auto'
				onSubmit={handleSubmit}
			>
				<label
					htmlFor={emailId}
					className='mr-2 absolute -top-6 font-light'
				>
					Your e-mail address
				</label>
				<input
					type='email'
					id={emailId}
					name='email'
					autoComplete='off'
					className='p-2 mt-1 border-2 rounded w-[60%] md:w-[500px] outline-rustyred border-cyan'
					value={email}
					onChange={(event: ChangeEvent<HTMLInputElement>) => {
						setEmail(event.currentTarget.value);
					}}
				/>
				<input
					type='submit'
					className='ml-1 cursor-pointer p-2 bg-rustyred border-2 border-rustyred text-white rounded hover:opacity-[.85] transition-opacity'
					value='Subscribe'
				/>
			</form>
			<p className='font-light pb-5 md:text-base'>
				You will be able to unsubscribe at any time
			</p>
		</section>
	);
};
