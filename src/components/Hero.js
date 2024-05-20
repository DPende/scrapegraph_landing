import scrapeGraphgLogo from "../assets/scrapegraphai_logo.png"
import YoutubeEmbed from "./YouTubeEmbed";



const Hero = () => {

    return (
        <section className="relative">

            <div className="px-4 md:pb-40 sm:px-6">

                {/* Hero content */}
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                    {/* Grid */}
                    <div className="2xl:grid content-center 2xl:grid-cols-12 2xl:gap-4">

                        {/* Title */}
                        <div className="col-span-6 text-center ">
                            <div className="flex justify-center items-center">
                                <img src={scrapeGraphgLogo} width={200} alt="Logo" />
                            </div>

                            <h1 className="text-purple-500 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 mt-4" data-aos="zoom-y-out">
                                ScrapeGraphAI
                            </h1>
                            <h1 className="text-purple-200 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
                               You Only Scrape Once
                            </h1>
                            <div className="max-w-3xl mx-auto">
                                <p className="text-purple-200 text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                                Automated LLM + Graph Pipelines for data-extraction and semantic understanding.                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="max-w-xs  mx-auto sm:max-w-none pb-16 sm:content-center sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                                <div className="sm:grid sm:grid-col-5 sm:gap-6">
                                    <a className="btn col-start-1 custom-btn-width md:mb-0 mb-6 col-end-3 text-white bg-black hover:bg-gray-600" href="https://github.com/VinciGit00/Scrapegraph-ai?tab=readme-ov-file">
                                        <svg className="w-6 h-6 mr-4 fill-current" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" />
                                        </svg>
                                        <span>GitHub</span>
                                    </a>
                                    <a className="btn col-start-3 custom-btn-width md:mb-0 mb-6 col-end-5 text-white bg-purple-700 hover:bg-pink-700 shadow" href="https://scrapegraph-ai.readthedocs.io/en/latest/">
                                        <span className="mr-4">
                                            Documentation
                                        </span>
                                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                                        </svg>
                                    </a>
                                    <a className="btn text-black custom-btn-width col-start-2 md:mb-0 mb-6 col-end-4 bg-white hover:bg-gray-700 shadow" href="https://github.com/VinciGit00/Scrapegraph-ai/releases/latest">
                                        <span className="mr-4">
                                            Latest Release
                                        </span>
                                        <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.583 8.445h.01M10.86 19.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 12.31 4l5.734.007A1.968 1.968 0 0 1 20 5.983v5.5a.992.992 0 0 1-.316.727l-7.44 7.5a.974.974 0 0 1-1.384.001Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Video */}
                        <div className="col-span-6 sm:flex sm:justify-center sm:items-center" data-aos="zoom-y-out">
                            <YoutubeEmbed embedId="ljoY1W6gPnY" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;