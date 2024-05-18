import LLMParagraphIcon from "../assets/paragraph-icon/LLMParagraphIcon.svg"

const LLMSupported = () => {
    return (
        <section className="bg-darker-800 pt-40 relative">
            <img src={LLMParagraphIcon} width={80} alt="LLM Paragraph Icon" />
            <div className="md:grid md:grid-cols-2 md:gap-20">
                <div>
                    <p className="text-light mt-10 text-3xl sm:text-4xl font-extrabold tracking-tight">
                        Choose your favorite LLM APIs!
                    </p>
                    <p className="text-light-200 mt-4 max-w-3xl space-y-6 ">
                        We support a variety of well-known LLM models and providers to analyze web pages and extract the information requested by users.
                        These models are specified within the graph configuration dictionary and can be used interchangeably,
                        allowing you to define different models for LLM and embeddings as needed.

                        You can utilize various local language models with tools like Ollama or through APIs from providers such as OpenAI, Groq, Azure, Gemini and many more...
                    </p>
                    <a className="group inline-flex mt-10 items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-dark-700 text-light" href="https://scrapegraph-ai.readthedocs.io/en/latest/scrapers/llm.html">
                        See More
                        <svg className="overflow-visible ml-3 text-light" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M0 0L3 3L0 6"></path>
                        </svg>
                    </a>
                </div>
                <div className="self-center mt-8 md:mt-0">
                    <div className="relative rounded-lg bg-slate-900 p-2">
                        <div className="relative flex text-center">
                            <div className="flex pl-3.5 pt-3"><svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.5 mr-1.5 h-3 w-3 text-red-500">
                                <circle r="12" cy="12" cx="12"></circle>
                            </svg><svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.75 mr-1.5 h-3 w-3 text-yellow-500">
                                    <circle r="12" cy="12" cx="12"></circle>
                                </svg><svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.75 mr-1.5 h-3 w-3 text-green-500">
                                    <circle r="12" cy="12" cx="12"></circle>
                                </svg></div><span className="absolute inset-x-0 top-2 text-xs text-slate-200">GraphConfigExample.json</span>
                        </div>
                        <div className="mt-5 space-y-1.5 px-5 pb-10">
                            <p className="mt-4 font-mono text-xs font-normal tracking-wide text-violet-400">
                                <span className="text-white">graph_config </span><span className="text-pink-400">= </span><span className="text-white">&#123;</span>
                            </p>
                            <p className="ml-6 font-mono text-xs font-normal tracking-wide text-violet-400">
                                <span className="text-blue">"llm"</span><span className="text-white">: </span><span className="text-white">&#123;</span>
                            </p>
                            <p className="ml-12 font-mono text-xs font-normal leading-4 tracking-wide text-violet-400">
                                <span className="text-blue">"api_key"</span><span className="text-white">: </span><span className="text-blue">"OPENAI_API_KEY"</span><span className="text-white">, </span>
                            </p>
                            <p className="ml-12 font-mono text-xs font-normal leading-4 tracking-wide text-violet-400">
                                <span className="text-blue">"model"</span><span className="text-white">: </span><span className="text-blue">"gpt-3.5-turbo"</span><span className="text-white">, </span>
                            </p>
                            <p className="ml-6 font-mono text-xs font-normal tracking-wide text-violet-400">
                                <span className="text-white">&#125;</span><span className="text-white">, </span>
                            </p>
                            <p className="font-mono text-xs font-normal tracking-wide text-violet-400">
                                <span className="text-white">&#125;</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LLMSupported;