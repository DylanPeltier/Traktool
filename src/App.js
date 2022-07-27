import Layout from './components/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import PageTwo from './pages/PageTwo';
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
				<Route path="/page-two">
					<PageTwo />
				</Route>
				<Route path="/page-three">
					<PageThree />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
