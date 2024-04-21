import React from 'react'
import { Navbar } from './Navbar'
import { Testimonials } from './Testimonials'
import { Footer } from './Footer'

export const Home = () => {
    return (
        <div>
            <Navbar />

            <Testimonials />

            <Footer />
        </div>
    )
}