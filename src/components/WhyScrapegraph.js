import proudCoder from "../assets/undraw_proud_coder.svg"
import devFocus from "../assets/undraw_dev_focus.svg"
import code from "../assets/undraw_code.svg"
import QuestionMarkParagraphIcon from "../assets/paragraph-icon/QuestionMarkParagraphIcon.svg"

const items = [
    {
        image: proudCoder,
        title: "Easy to Use",
        description: "Scrapegraph-ai is a powerful open-source library designed for AI-powered web scraping. Simply activate the API keys, and you'll be able to scrape thousands of web pages within seconds!"
    },
    {
        image: devFocus,
        title: "Easy and fast to implement",
        description: "Implementing is incredibly straightforward and swift. You only need to write a handful of lines of code, and your task is completed efficiently and effectively."
    },
    {
        image: code,
        title: "Focus on What Matters",
        description: "With Scrapegraph-ai, you can save hours of time. Just set up the project, activate the API keys, and let the AI handle the rest. The AI will efficiently scrape thousands of web pages for you."
    }
];

const WhyScrapegraph = () => {
    return (
        <section className="relative pt-40">
            <img src={QuestionMarkParagraphIcon} width={80} alt="LLM Paragraph Icon" />
            <p className="text-light mt-10 text-3xl sm:text-4xl font-extrabold tracking-tight">
                Why ScrapegraphAI?
            </p>
            <p className="text-light-200 mt-4 max-w-3xl space-y-6 ">
                ScrapegraphAI stands apart from traditional web scraping tools by harnessing the capabilities of Large Language Models (LLMs).
                Unlike rigid methods that rely on predefined patterns or manual adjustments, ScrapegraphAI dynamically adapts to variations in website structures.
                This adaptability minimizes the need for ongoing developer involvement, ensuring continued functionality even amidst changes to website layouts.
            </p>

            <div className="flex flex-wrap items-stretch justify-center mt-8">
                {items.map((item, index) => (
                    <div key={index} className="flex items-stretch w-full md:w-1/2 lg:w-1/3">
                        <div  className="flex m-2 md:m-4 items-center px-3 md:px-6 py-8 md:py-16 flex-col text-lg p-5 md:col-span-4 lg:col-span-4 rounded-xl bg-light">
                            <img src={item.image} width={200} alt={item.title} />
                            <div className="font-bold text-2xl mt-8 text-center leading-snug tracking-tight">{item.title}</div>
                            <div className="text-gray-600 mt-2 text-center">{item.description}</div>
                        </div>
                    </div>
                ))}

            </div>

        </section>
    )

}

export default WhyScrapegraph;