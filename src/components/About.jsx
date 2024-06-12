import React, { useEffect } from 'react';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        preloadLCPImage();
    }, []);

    const preloadLCPImage = () => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = 'https://i.postimg.cc/9MW8G96J/pexels-the-coach-space-2977565.jpg';
        link.as = 'image';
        document.head.appendChild(link);
    };
    return (
        <>
            <Navbar />
            <section className="py-10 lg:py-20 font-poppins mt-20">
                <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <div className="lg:max-w-md">
                                <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                                    <span className="text-sm text-gray-600 uppercase dark:text-gray-400 select-none">Who we are?</span>
                                    <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-black-300 select-none">
                                        About Us
                                    </h1>
                                </div>
                                <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                                    Pixi is a leading provider of high-quality headphones designed to deliver an exceptional audio experience. Our mission is to bring the best in audio technology to our customers, ensuring that every listening experience is unparalleled.
                                </p>
                                <div className="flex flex-wrap items-center select-none">
                                    <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                        <div className="p-6 bg-white">
                                            <span className="text-blue-500 dark:text-blue-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-10 h-10"
                                                    fill="currentColor" viewBox="0 0 16 16">
                                                    <path
                                                        d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                                    <path
                                                        d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                                </svg>
                                            </span>
                                            <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">2097</p>
                                            <h2 className="text-sm text-gray-700 dark:text-gray-400">Projects and Plans</h2>
                                        </div>
                                    </div>
                                    <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                        <div className="p-6 bg-white">
                                            <span className="text-blue-500 dark:text-blue-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-10 h-10"
                                                    fill="currentColor" viewBox="0 0 16 16">
                                                    <path
                                                        d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                    <path fill-rule="evenodd"
                                                        d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                                    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                                                </svg>
                                            </span>
                                            <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">3,590</p>
                                            <h2 className="text-sm text-gray-700 dark:text-gray-400">Satisfied Customers</h2>
                                        </div>
                                    </div>
                                    <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                        <div className="p-6 bg-white">
                                            <span className="text-blue-500 dark:text-blue-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-10 h-10"
                                                    fill="currentColor" viewBox="0 0 16 16">
                                                    <path
                                                        d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                </svg>
                                            </span>
                                            <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">74</p>
                                            <h2 className="text-sm text-gray-700 dark:text-gray-400">Team Members</h2>
                                        </div>
                                    </div>
                                    <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                                        <div className="p-6 bg-white">
                                            <span className="text-blue-500 dark:text-blue-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-10 h-10"
                                                    fill="currentColor" viewBox="0 0 16 16">
                                                    <path
                                                        d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                                                </svg>
                                            </span>
                                            <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">100</p>
                                            <h2 className="text-sm text-gray-700 dark:text-gray-400">Hours of Music Played</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 select-none">
                            <img src="https://i.postimg.cc/9MW8G96J/pexels-the-coach-space-2977565.jpg" alt=""
                                className="relative object-cover w-full h-full rounded" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 lg:py-20 font-poppins bg-gray-100 dark:bg-gray-800 mb-48">
                <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <div className="lg:max-w-md">
                                <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                                    <h2 className="mt-2 text-2xl font-black text-gray-700 md:text-4xl dark:text-gray-300 select-none">
                                        Our Vision
                                    </h2>
                                </div>
                                <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                                    At Pixi, our vision is to revolutionize the way people experience sound. We aim to create headphones that not only deliver outstanding audio quality but also offer comfort and style, making every moment of listening a pleasure.
                                </p>
                            </div>
                        </div>
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            <div className="lg:max-w-md">
                                <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                                    <h2 className="mt-2 text-2xl font-black text-gray-700 md:text-4xl dark:text-gray-300 select-none">
                                        Our Mission
                                    </h2>
                                </div>
                                <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                                    Our mission is to push the boundaries of audio technology, ensuring that our headphones are equipped with the latest innovations. We are dedicated to providing our customers with products that enhance their audio experience, whether they are listening to music, podcasts, or calls.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default About;
