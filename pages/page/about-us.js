import React from 'react'

// import Custom Components
import Layout from '../../containers/common/common-layout'
import AbouSection from './about-us/about'
import SpeakerSection from './about-us/speaker'
import CounterSection from './about-us/counter'
import Faq from '../layouts/sections/modern-sass/faq'
import CalculateSection from '../../pages/layouts/sections/gym/calculate'
import TestimonialSection from '../layouts/sections/modern-sass/testimonial'


const AboutUs = () => (
    <Layout
        title="Backed by science"
        subtitle="You don’t need to be a scientist to understand how spending 12 minutes or more in the Orange Zone gives you more strength, more energy and more life. You just need to be a member."
        btntext="Book your Free class!"
        bannerImg="/assets/images/OTF/banner/aboutbanner.jpg"
    >

        <AbouSection />

        <SpeakerSection />
        <TestimonialSection />

        <CounterSection />
        <Faq />
        <CalculateSection />
    </Layout>
);


export default AboutUs;