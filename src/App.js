import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Gallery from './pages/Gallery';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact-us" element={<Contact />} />
				<Route path="/about-us" element={<About />} />
				<Route path="/gallery" element={<Gallery />} />
			</Routes>
		</Layout>
	);
}

export default App;
