import React, { Suspense, lazy } from 'react';
import Navbar from './Navbar';
import { Testimonials } from './Testimonials';
import { Footer } from './Footer';

const Slider = lazy(() => import('./Slider'));
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
                <Footer />
            </Suspense>
        </div>
    );
};
