//import logo from './logo.svg';
import './assets/css/App.css';
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Home />
            <Footer />
        </div>

    );
}

export default App;
