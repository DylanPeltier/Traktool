import Layout from './components/Layout';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Contact from './pages/Contact';
// import About from './pages/About';
// import Gallery from './pages/Gallery';
const About = React.lazy(() => import('./pages/About'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Home = React.lazy(() => import('./pages/Home'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/contact-us"
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<Contact />
						</Suspense>
					}
				/>
				<Route
					path="/about-us"
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<About />
						</Suspense>
					}
				/>
				<Route
					path="/gallery"
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<Gallery />
						</Suspense>
					}
				/>
			</Routes>
		</Layout>
	);
}

export default App;
