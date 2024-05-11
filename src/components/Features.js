import proudCoder from '../assets/undraw_proud_coder.svg'
import devFocus from '../assets/undraw_dev_focus.svg'
import code from '../assets/undraw_code.svg'

const Features = () => {


    return (
        <section className="bg-darker-800 relative">

            <div className="relative pb-16 max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 md:pt-20">

                    {/* Section description */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">Meet a new paradigm</h1>
                        <p className="text-xl text-gray-300">ScrapegraphAI is an open-source library conceived to meet the demands of a dynamic web environment and data-centric world. Its mission is to usher in a new era of scraping tools, leveraging Large Language Models (LLMs) to offer enhanced flexibility and reduced maintenance burden for developers.</p>
                    </div>

                    {/* Section feature */}
                    <div className="md:grid md:grid-cols-12 md:gap-6 mb-16">

                        <div className='flex items-center flex-col text-lg p-5 md:col-span-4 lg:col-span-4 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg'>
                            <img src={proudCoder} className='mb-2' alt='proud coder' />
                            <div className="font-bold md:text-2xl leading-snug tracking-tight mb-2">Easy to Use</div>
                            <div className="text-gray-600">Scrapegraph-ai is an open-source library for AI-powered scraping. Just activate the API keys, and you can scrape thousands of web pages in seconds!</div>
                        </div>

                        <div className='flex items-center flex-col text-lg p-5 md:col-span-4 lg:col-span-4 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg'>
                            <img src={devFocus} className='mb-2' alt='programmer' />
                            <div className="font-bold md:text-2xl  leading-snug tracking-tight mb-2">Easy and fast to implement</div>
                            <div className="text-gray-600">You just need to implement a few lines of code, and the work is done.</div>
                        </div>

                        <div className='flex items-center flex-col text-lg p-5 md:col-span-4 lg:col-span-4 rounded border transition duration-300 ease-in-out mb-3 bg-white shadow-md border-gray-200 hover:shadow-lg'>
                            <img src={code} className='mb-2' alt='code' />
                            <div className="font-bold md:text-2xl  leading-snug tracking-tight mb-2">Focus on What Matters</div>
                            <div className="text-gray-600">With this library, you can save hours of time because you only need to set up the project, and the AI will do everything for you.</div>
                        </div>

                    </div>

                    {/* Why */}
                    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-12 lg:col-span-12 md:mt-6" data-aos="fade-right">
                        <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                            <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">Why ScrapegraphAI?</h3>
                            <p className="text-xl text-gray-300">ScrapegraphAI stands apart from traditional web scraping tools by harnessing the capabilities of Large Language Models (LLMs). Unlike rigid methods that rely on predefined patterns or manual adjustments, ScrapegraphAI dynamically adjusts to variations in website structures. This adaptability minimizes the necessity for ongoing developer involvement, ensuring continued functionality even amidst changes to website layouts.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Features;