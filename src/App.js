//import logo from './logo.svg';
import './assets/css/App.css';
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer';
import ParticlesBg from './components/ParticlesBg';

const App = () => {
    return (
        <div className="App">
            <div className='absolute -z-1'>
                <ParticlesBg />
            </div>
            <Header />
            <Home />
            <Footer />
        </div>

    );
}

export default App;
