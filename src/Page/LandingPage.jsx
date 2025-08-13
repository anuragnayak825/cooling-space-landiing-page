import React from 'react'
import Header from '../Header'
import HeroSection from '../HeroSection'
import About from './About'
import Services from './Services'
import CTABanner from './CTABaner'
import ResidentialandCommercial from './ResidentialandCommercial'
import WhyChooseUs from './WhyChooseUs'
import Counter from './Counter'
import ReviewTimeline from './ReviewTimeline'
import OfferSection from './OfferSection'
import Footer1 from './Footer1'

// import HeroSection from '../HeroSection'

export default function LandingPage() {
    return (
        <>
            <Header />
            <HeroSection />
            <About />
            <OfferSection />
            <Services />
            <CTABanner />
            <ResidentialandCommercial />
            <WhyChooseUs />
            <Counter />
            <CTABanner />
            <ReviewTimeline />
            <Footer1 />
            {/* <section className='w-full h-screen'>

            </section> */}
        </>
    )
}
