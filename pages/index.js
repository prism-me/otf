import React, { useEffect } from 'react'
import Head from 'next/head'

// import Custom Components
import Header from '../containers/common/header'
import BannerSection from '../pages/layouts/sections/gym/banner'
import FormatSection from '../pages/layouts/sections/gym/format'
import AboutSection from '../pages/layouts/sections/gym/about'
import ScheduleSection from '../pages/layouts/sections/gym/schedule'
import CounterSection from '../pages/layouts/sections/gym/counter'
import TrainerSection from '../pages/layouts/sections/gym/trainer'
// import TestimonialSection from '../pages/layouts/sections/gym/testimonial'
import PricingSection from '../pages/layouts/sections/gym/pricing'
import CalculateSection from '../pages/layouts/sections/gym/calculate'
// import BrandSection from '../pages/layouts/sections/gym/brand'
import FooterSection from '../pages/layouts/sections/gym/footer'

const Gym = () => {

  useEffect(() => {
    document.body.style.setProperty('--primary', '#000')
    document.body.style.setProperty('--secondary', '#000')
    document.body.style.setProperty('--light', '#000')
    document.body.style.setProperty('--dark', '#000')
  })

  return (
    <div>
      <Head>
        <title>Orange Theory</title>
      </Head>

      <Header className="gym nav-lg" />

      <BannerSection />

      <AboutSection />

      <ScheduleSection />

      <PricingSection />

      <CounterSection />

      <TrainerSection />

      {/* <TestimonialSection /> */}

      <FormatSection />

      <CalculateSection />

      {/* <BrandSection /> */}

      <FooterSection />

    </div>
  )
}
export default Gym;