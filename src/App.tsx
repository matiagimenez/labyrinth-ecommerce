import {} from 'react';
import { PageLayout } from './layout';
import { HomePage } from './pages/';

function App() {
	return (
		<PageLayout>
			<h1 className='text-3xl font-bold underline text-cyan'>
				Hello world!
			</h1>
			<HomePage />
		</PageLayout>
	);
}

export default App;
