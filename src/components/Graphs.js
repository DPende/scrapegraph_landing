import OmniScraperGraphIcon from "../assets/graphsIcon/OmniScraperGraphIcon.svg"
import OmniSearchGraphIcon from "../assets/graphsIcon/OmniSearchGraphIcon.svg"
import SearchGraphIcon from "../assets/graphsIcon/SearchGraphIcon.svg"
import SmartScraperGraphIcon from "../assets/graphsIcon/SmartScraperGraphIcon.svg"
import SpeechGraphIcon from "../assets/graphsIcon/SpeechGraphIcon.svg"
import GraphsParagraphIcon from "../assets/paragraph-icon/GraphsParagraphIcon.svg"

const items = [
    {
        icon: SmartScraperGraphIcon,
        title: "SmartScraperGraph",
        description: "ScrapeGraphAI also includes a one-page scraper, perfect for obtaining information from individual web pages or local files. This tool streamlines the process, allowing you to extract data quickly and efficiently from specific sources.",
        link: "https://scrapegraph-ai.readthedocs.io/en/latest/scrapers/graphs.html#smartscrapergraph"
    },
    {
        icon: SearchGraphIcon,
        title: "SearchGraph",
        description: "ScrapeGraphAI features a multi-page scraper, enabling you to gather all the information you need from multiple web pages seamlessly. This powerful tool ensures comprehensive data collection, saving you time and effort in extracting extensive datasets.",
        link: "https://scrapegraph-ai.readthedocs.io/en/latest/scrapers/graphs.html#searchgraph"
    },
    {
        icon: SpeechGraphIcon,
        title: "SpeechGraph",
        description: "ScrapeGraphAI can scrape information and convert it into voice audio. This unique feature allows providing an accessible and convenient way to interact with the extracted data.",
        link: "https://scrapegraph-ai.readthedocs.io/en/latest/scrapers/graphs.html#speechgraph"
    },
    {
        icon: OmniScraperGraphIcon,
        title: "OmniScraperGraph",
        description: "An evolution of SmartScraperGraph equipped with image description capabilities. This enhancement enables users to extract images from single web pages and obtain accurate descriptions, enriching the dataset with valuable visual information. (GPT-4o only)",
        link: "https://scrapegraph-ai.readthedocs.io/en/latest/scrapers/graphs.html#omniscrapergraph"
    },
    {
        icon: OmniSearchGraphIcon,
        title: "OmniSearchGraph",
        description: "An evolution of SearchGraph, equipped with image description capabilities. Unlike OmniScraperGraph, this enhancement can be used to extract images from multiple web pages and obtain accurate descriptions. (GPT-4o only)",
        link: "https://scrapegraph-ai.readthedocs.io/en/latest/scrapers/graphs.html#omnisearchgraph"
    }
];

const Graphs = () => {
    return (
        <section className="bg-darker-800 pt-40 relative">
            <img src={GraphsParagraphIcon} width={80} alt="LLM Paragraph Icon" />
            <p className="text-light mt-10 text-3xl sm:text-4xl font-extrabold tracking-tight">
                Multi scraping options
            </p>
            <p className="text-light-200 mt-4 max-w-3xl space-y-6 ">
                ScrapegraphAI offers various scraping modes and other advanced features, such as extracting information from local files, single web pages, and multiple web pages.
                Additionally, it can transform the extracted information into audio. If you use GPT-4o, it can describe images.
            </p>

            {/* Graphs normal */}
            <div className="flex items-stretch justify-center flex-wrap mt-8">
                {items.map((item, index) => (
                    <div key={index} className="flex w-full items-stretch md:w-1/2 lg:w-1/3">
                        <div className="flex m-2 md:m-4 items-center flex-col text-lg px-3 md:px-6 py-8 md:py-16 rounded-xl bg-light">
                            <img src={item.icon} width={90} alt="Graph Icon" />
                            <div className="font-bold text-2xl md:text-3xl leading-snug tracking-tight mt-8">{item.title}</div>
                            <div className="text-gray-600 text-center mt-2 mb-8">{item.description}</div>
                            <a className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-dark-800 text-light mt-auto" href={item.link}>
                                Read More
                                <svg className="overflow-visible ml-3 text-light" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M0 0L3 3L0 6"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Graphs;