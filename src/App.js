import Layout from './components/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import PageThree from './pages/PageThree';
import About from './pages/About';

function App() {
	return (
		<Layout>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/about-us">
					<About />
				</Route>
				<Route path="/contact-us">
					<Contact />
				</Route>
				<Route path="/page-three">
					<PageThree />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
