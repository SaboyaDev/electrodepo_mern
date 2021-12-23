import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Header />
			<main className='py-5'>
				<Container className='text-center'>
					<HomePage />
				</Container>
			</main>
			<Footer />
		</>
	);
}

export default App;
