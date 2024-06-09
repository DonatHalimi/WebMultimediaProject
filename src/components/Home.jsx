import React, { Suspense, lazy } from 'react';
import Navbar from './Navbar';
import Slider from './Slider';
import PixiBox from './PixiBox';
import { Testimonials } from './Testimonials';
import { Footer } from './Footer';

const Categories = lazy(() => import('./Categories'));
const Product = lazy(() => import('./Product'));
const Video = lazy(() => import('./Video'));

export const Home = () => {
    return (
        <div>
            <Navbar />
            <Suspense fallback={<div>Loading...</div>}>
                <Slider />
                <Categories />
                <Product />
                <Testimonials />
                <Video />
                <PixiBox />
                <Footer />
            </Suspense>
        </div>
    );
};
