import Graphs from "./Graphs";
import LLMSupported from "./LLMSupported";
import WhyScrapegraph from "./WhyScrapegraph";

const Features = () => {
    return (
        <section className="bg-darker-800 py-20 px-4">
            <h2 className="text-light text-center text-4xl tracking-tight font-extrabold sm:text-5xl">
                Meet a new paradigm
            </h2>
            <p className="mt-6 max-w-3xl text-light-200 text-center mx-auto text-lg">
                ScrapegraphAI is an open-source library conceived to meet the demands of a dynamic web environment and data-centric world.
                Its mission is to usher in a new era of scraping tools, leveraging Large Language Models (LLMs) to offer
                enhanced flexibility and reduced maintenance burden for developers.
            </p>
            <div className="max-w-7xl mx-auto">
                <WhyScrapegraph />
                <LLMSupported />
                <Graphs />
            </div>
        </section>
    )
}

export default Features;