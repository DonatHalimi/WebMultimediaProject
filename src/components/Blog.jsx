import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Footer } from './Footer';
import productImage1 from '../images/product-1.jpg';
import productImage2 from '../images/product-2.jpg';
import productImage3 from '../images/product-3.jpg';
import productImage4 from '../images/product-4.jpg';

const Blog = () => {
    const [activeSection, setActiveSection] = useState('section1');

    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.getElementById('section1').offsetTop;
            const section2 = document.getElementById('section2').offsetTop;
            const section3 = document.getElementById('section3').offsetTop;
            const section4 = document.getElementById('section4').offsetTop;
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            if (scrollPosition >= section4) {
                setActiveSection('section4');
            } else if (scrollPosition >= section3) {
                setActiveSection('section3');
            } else if (scrollPosition >= section2) {
                setActiveSection('section2');
            } else if (scrollPosition >= section1) {
                setActiveSection('section1');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLinkClick = (section) => {
        setActiveSection(section);
        window.scrollTo({ behavior: 'smooth' });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow mb-52 relative">
                <div className="container mx-auto mt-20 flex">
                    <div className="w-1/4 fixed top-80">
                        <ul className="space-y-4">
                            <li className={`${activeSection === 'section1' ? 'font-bold' : 'font-normal'}`}>
                                <a href="#section1" onClick={() => handleLinkClick('section1')}>Superior Sound Quality</a>
                            </li>
                            <li className={`${activeSection === 'section2' ? 'font-bold' : 'font-normal'}`}>
                                <a href="#section2" onClick={() => handleLinkClick('section2')}>Advanced Noise Cancellation</a>
                            </li>
                            <li className={`${activeSection === 'section3' ? 'font-bold' : 'font-normal'}`}>
                                <a href="#section3" onClick={() => handleLinkClick('section3')}>Comfort and Design</a>
                            </li>
                            <li className={`${activeSection === 'section4' ? 'font-bold' : 'font-normal'}`}>
                                <a href="#section4" onClick={() => handleLinkClick('section4')}>Long Battery Life</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-3/4 ml-auto">
                        <div className="flex flex-wrap justify-center gap-8">
                            <div className="max-w-sm bg-white shadow-lg rounded-lg">
                                <img src={productImage1} alt="Product 1" className="w-full h-48 object-contain" />
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold mb-2">Superior Sound Quality</h2>
                                    <p className="text-gray-700">
                                        Our headphones provide an exceptional audio experience with rich, deep bass and crystal-clear treble.
                                    </p>
                                </div>
                            </div>
                            <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
                                <img src={productImage2} alt="Product 2" className="w-full h-48 object-contain" />
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold mb-2">Advanced Noise Cancellation</h2>
                                    <p className="text-gray-700">
                                        Our industry-leading noise cancellation technology allows you to enjoy your music without any distractions.
                                    </p>
                                </div>
                            </div>
                            <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
                                <img src={productImage3} alt="Product 3" className="w-full h-48 object-contain" />
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold mb-2">Comfort and Design</h2>
                                    <p className="text-gray-700">
                                        Designed with comfort in mind, our headphones feature ergonomic designs and premium materials.
                                    </p>
                                </div>
                            </div>
                            <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
                                <img src={productImage4} alt="Product 4" className="w-full h-48 object-contain" />
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold mb-2">Long Battery Life</h2>
                                    <p className="text-gray-700">
                                        Our headphones are equipped with long-lasting batteries that ensure you never run out of music on the go.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <section id="section1" className="mt-40">
                            <h1 className="text-4xl font-bold mb-6">Superior Sound Quality</h1>
                            <p className="text-gray-700 mb-4">
                                Experience the best in audio quality with our headphones. Engineered with advanced sound technology, our headphones deliver a perfect balance of bass, midrange, and treble. Every note, every beat, and every lyric is rendered with incredible clarity, allowing you to experience music as it was meant to be heard.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Whether you're listening to classical music, rock, or hip-hop, our headphones ensure that every genre sounds its best. The high-fidelity sound reproduction makes you feel like you're in the recording studio with your favorite artists. Hear every detail of your favorite songs and immerse yourself in a world of high-fidelity sound.
                            </p>
                        </section>
                        <section id="section2" className="mt-20">
                            <h1 className="text-4xl font-bold mb-6">Advanced Noise Cancellation</h1>
                            <p className="text-gray-700 mb-4">
                                Our noise-canceling headphones are designed to provide the ultimate listening experience by blocking out unwanted external noise. Using advanced algorithms and multiple microphones, our headphones effectively reduce ambient sounds, allowing you to focus on your music or calls without distraction.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Ideal for travel, work, or just relaxing at home, our noise cancellation technology ensures that you can enjoy your audio in peace. Say goodbye to the sounds of traffic, chatter, and other background noise. Whether you are on a noisy street or a crowded plane, our headphones will ensure a peaceful listening experience.
                            </p>
                        </section>
                        <section id="section3" className="mt-20">
                            <h1 className="text-4xl font-bold mb-6">Comfort and Design</h1>
                            <p className="text-gray-700 mb-4">
                                Comfort is a key consideration in our headphone design. We use soft, breathable materials for the ear cushions to provide a comfortable fit even during long listening sessions. The adjustable headbands ensure a perfect fit for all head sizes.
                            </p>
                            <p className="text-gray-700 mb-4">
                                The sleek, modern design of our headphones not only looks great but is also functional. The foldable design makes them easy to carry, while the durable construction ensures they can withstand daily wear and tear. Enjoy hours of listening without any discomfort, thanks to our soft ear cushions and adjustable headbands.
                            </p>
                        </section>
                        <section id="section4" className="mt-20">
                            <h1 className="text-4xl font-bold mb-6">Long Battery Life</h1>
                            <p className="text-gray-700 mb-4">
                                Never worry about running out of battery with our headphones. With up to 30 hours of playback time on a single charge, you can enjoy your music all day long. Quick charging capabilities mean that you can get hours of use from just a few minutes of charging.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Our headphones are perfect for long trips, whether you're on a plane, a train, or just commuting to work. Enjoy uninterrupted music and stay connected with long-lasting battery life. Enjoy up to 30 hours of uninterrupted listening on a single charge, perfect for long trips and daily use.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Blog;