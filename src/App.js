import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-circular-progressbar/dist/styles.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Switch>
					<Route exact path='/'>
						<Header />
					</Route>
					<Route exact path='/about'>
						<About />
					</Route>
					<Route exact path='/skills'>
						<Skills />
					</Route>
					<Route exact path='/projects'>
						<Projects />
					</Route>
					<Route exact path='/contact'>
						<Contact />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
