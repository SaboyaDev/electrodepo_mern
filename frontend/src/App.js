import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<Header />
			<main className='py-5'>
				{/* <Container className='text-center'> */}
				<Container>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/product/:productId' element={<ProductPage />} />
					</Routes>
				</Container>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
