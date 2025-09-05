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
import Pricing from './Pricing'
import ServiceLocations from './ServiceLocations'
import ServiceProcess from './ServiceProcess'
import Melaka from './Melaka'

// import HeroSection from '../HeroSection'

export default function LandingPage() {
    return (
        <>
            <Header />
            <HeroSection />
            <Pricing/>
            <About />
            <OfferSection />
            <Services />
            <CTABanner />
            <ResidentialandCommercial />
            <WhyChooseUs />
            <Counter />
            <CTABanner />

            {/* <ServiceProcess/> */}
            <Melaka/>
            {/* <ServiceLocations/> */}
            {/* <ReviewTimeline /> */}
            <Footer1 />
            {/* <section className='w-full h-screen'>

            </section> */}
        </>
    )
}
