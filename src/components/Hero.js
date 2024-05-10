import Particle from "./Particle";
import scrapeGraphgLogo from '../assets/scrapegraphai_logo.png'
import YoutubeEmbed from "./YouTubeEmbed";



const Hero = () => {

    return (
        <section className="relative">
            {/* Illustration behind hero content */}
            <div className='absolute -z-1'>
                <Particle />
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Hero content */}
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    {/* Grid */}
                    <div className="md:grid content-center md:grid-cols-12 md:gap-4">

                        {/* Logo */}
                        <div className="md:col-span-3 flex justify-center items-center" data-aos="zoom-y-out">
                            <img src={scrapeGraphgLogo} width={400} alt="Logo" />
                        </div>

                        {/* Title */}
                        <div className="md:col-span-9 text-center ">
                            <h1 className="text-purple-500 text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
                                Scrapegraph-AI
                            </h1>
                            <h1 className="text-purple-200 text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
                                The revolution of scraping
                            </h1>
                            <div className="max-w-3xl mx-auto">
                                <p className="text-purple-200 text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                                    Meet the new library for making scraping that will change the way you scrape
                                </p>



                            </div>


                        </div>
                        {/* Buttons */}
                        <div className="max-w-xs col-start-5 col-end-12 mx-auto sm:max-w-none pb-16 sm:content-center sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                            <a className="btn text-white bg-black mr-8 hover:bg-gray-600 mb-5" href="#0">
                                <svg className="w-6 h-6 mr-4 fill-current" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" />
                                </svg>
                                <span>GitHub</span>
                            </a>
                            <a className="btn text-white bg-purple-700 hover:bg-pink-700 shadow mb-5" href="#0">
                                <span className="mr-4">
                                    Documentation
                                </span>
                                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                                </svg>
                            </a>
                        </div>


                    </div>
                    {/* Video */}
                    <YoutubeEmbed embedId="ljoY1W6gPnY" />

                </div>

            </div>
        </section>
    )
}

export default Hero;