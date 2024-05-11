import Hero from '../components/Hero'
import Features from '../components/Features';
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <div className="Home">
            <Hero />
            <Features />
            <Newsletter />
        </div>
    );
}

export default Home;