import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const SignUpSuccessMessage = () => {
    console.log("ciao")
    return (
        <div className="flex items-center p-4 mb-4 mt-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
            <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
                Welcome to our newsletter community!
            </div>
        </div>
    )
}

const SignUpErrorMessage = () => {
    return (
        <div className="flex items-center p-4 mb-4 mt-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
            <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <div>
                <span className="font-medium">Error!</span> There is an error in the sign-in process, please try again later.
            </div>
        </div>
    )
}

const Newsletter = () => {
    const form = useRef();
    const [signUpSuccess, setSignUpSuccess] = useState(false);
    const [signUpError, setSignUpError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, {
                publicKey: process.env.REACT_APP_PUBLIC_KEY,
            })
            .then(
                () => {
                    setSignUpSuccess(true);
                },
                (error) => {
                    setSignUpError(true);
                },
            );
    };

    return (
        <section className="bg-light pt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pb-12 md:pb-20">

                    {/* CTA box */}
                    <div className="relative bg-darker rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

                        {/* Background illustration */}
                        <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
                            <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                                        <stop stopColor="#DFDFDF" offset="0%" />
                                        <stop stopColor="#4C4C4C" offset="44.317%" />
                                        <stop stopColor="#333" offset="100%" />
                                    </radialGradient>
                                </defs>
                                <g fill="none" fillRule="evenodd">
                                    <g fill="#FFF">
                                        <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                                        <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                                        <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                                        <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                                        <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                                        <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                                        <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                                        <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                                    </g>
                                    <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                                </g>
                            </svg>
                        </div>

                        <div className="relative flex flex-col lg:flex-row justify-between items-center">

                            {/* CTA content */}
                            <div className="text-center lg:text-left lg:max-w-xl">
                                <h3 className="h3 text-white text-2xl mb-2">Subscribe to our newsletter!</h3>
                                <p className="text-gray-300 text-lg mb-6">Sign up for regular updates.</p>

                                {/* CTA form */}
                                <form ref={form} className="w-full lg:w-auto" onSubmit={sendEmail}>
                                    <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                                        <input type="email" name="sender" className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="Your email…" aria-label="Your email…" />
                                        <input type="submit" className="btn text-white bg-blue-500 hover:bg-blue-200 shadow" value="Subscribe" />
                                    </div>
                                    {/* Success message */}
                                    {signUpSuccess && <SignUpSuccessMessage />}
                                    {signUpError && <SignUpErrorMessage />}
                                    <p className="text-sm text-gray-400 mt-3">No spam. You can unsubscribe at any time.</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter;