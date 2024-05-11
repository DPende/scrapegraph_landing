import Logo from './Logo'
export default function Footer() {
    return (
        <footer className='bg-white'>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Top area: Blocks */}
                <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

                    {/* Logo */}
                    <div className="sm:col-span-12 flex flex-col items-center md:items-start md:justify-start md:text-left lg:col-span-3">
                        <div className="mb-2">
                            <Logo />
                        </div>
                        <div className="text-sm text-gray-600">
                            <a href="#0" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Terms</a> · <a href="#0" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Privacy Policy</a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="sm:col-span-6 md:text-left text-center md:col-span-3 lg:col-span-2">
                        <h6 className="text-gray-800 font-medium mb-2">Link</h6>
                        <ul className="text-sm">
                            <li className="mb-2">
                                <a href="https://github.com/VinciGit00/Scrapegraph-ai?tab=readme-ov-file" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">GitHub</a>
                            </li>
                            <li className="mb-2">
                                <a href="https://scrapegraph-ai.readthedocs.io/en/latest/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Documentation</a>
                            </li>
                        </ul>
                    </div>
                    <div className="sm:col-span-6 md:text-left text-center md:col-span-3 lg:col-span-2">
                        <h6 className="text-gray-800 font-medium mb-2">Social</h6>
                        <ul className="text-sm">
                            <li className="mb-2">
                                <a href="https://twitter.com/scrapegraphai" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">X</a>
                            </li>
                            <li className="mb-2">
                                <a href="https://www.linkedin.com/company/scrapegraphai/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">LinkedIn</a>
                            </li>
                            <li className="mb-2">
                                <a href="https://discord.com/invite/gkxQDAjfeX" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Discord</a>
                            </li>
                            <li className="mb-2">
                                <a href="https://www.youtube.com/@ScrapeGraphAI" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">YouTube</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom area */}
                <div className="md:flex md:items-center md:justify-between md:flex-row  md:py-8 flex justify-center flex-col py-4 border-t border-gray-200">

                    {/* Social as */}
                    <ul className="flex justify-between mb-4 md:order-1 md:ml-4 md:mb-0">
                        <li className="ml-4">
                            <a href="https://github.com/VinciGit00/Scrapegraph-ai?tab=readme-ov-file" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                                </svg>
                            </a>
                        </li>
                        <li className="ml-4">
                            <a href="https://twitter.com/scrapegraphai" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                                </svg>
                            </a>
                        </li>
                        <li className="ml-4">
                            <a href="https://www.linkedin.com/company/scrapegraphai/" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="LinkdedIn">
                                <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 32 32">
                                    <path d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" />
                                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                                </svg>
                            </a>
                        </li>
                        <li className="ml-4">
                            <a href="https://discord.com/invite/gkxQDAjfeX" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Discord">
                                <svg className="w-8 h-8  fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 32 32">
                                    <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                                </svg>
                            </a>
                        </li>
                        <li className="ml-4">
                            <a href="https://www.youtube.com/@ScrapeGraphAI" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="YouTube">
                                <svg className="w-8 h-8  fill-current" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 32 32">
                                    <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </li>
                    </ul>

                    {/* Copyrights note */}
                    <div className="text-sm text-gray-600">&copy; scrapegraphai.com. All rights reserved.</div>
                </div>
            </div>
        </footer>
    )
}
