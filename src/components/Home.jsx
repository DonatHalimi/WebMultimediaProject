import React from 'react'
import { Navbar } from './Navbar'
import { Testimonials } from './Testimonials'
import { Footer } from './Footer'
import Slider from './Slider'

export const Home = () => {
    return (
        <div>
            <Navbar />

            <Slider />
            
            <Testimonials />

            <Footer />
        </div>
    )
}