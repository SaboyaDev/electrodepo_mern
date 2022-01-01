import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<Header />
			<main className='py-5'>
				<Container className='text-center'>
					<Routes>
						<Route path='' element={<HomePage />} />
					</Routes>
				</Container>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
