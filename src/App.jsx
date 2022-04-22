import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Mobiles from './components/Mobiles';
import Laptops from './components/Laptops';
import Headsets from './components/Headsets';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/mobiles' element={<Mobiles />} />
				<Route path='/laptops' element={<Laptops />} />
				<Route path='/headsets' element={<Headsets />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/faq' element={<FAQ />} />
				<Route path='/aboutus' element={<Aboutus />} />
				<Route path='/contactus' element={<Contactus />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
