import React from 'react';
import Navbar from './Navbar';
import { Testimonials } from './Testimonials';
import { Footer } from './Footer';
import Slider from './Slider';
import Product from './Product';
import PixiBox from './PixiBox';

export const Home = () => {

    return (
        <div>
            <Navbar />

            <Slider />

            <Product />

            <Testimonials />

            <video src='../../src/Video.mp4' controls className='mx-auto my-auto mb-40'></video>

            <PixiBox />

            <Footer />
        </div>
    );
};
