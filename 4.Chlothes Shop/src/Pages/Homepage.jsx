import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Features from '../Components/Features/Features'
import FeaturedProduct from '../Components/FeaturedProduct/FeaturedProduct'
import Banner from '../Components/Banner/Banner'
import NewArrivals from '../Components/NewArrivals/NewArrivals'
import Banner1 from '../Components/Banner/Banner1'
import Banner2 from '../Components/Banner/Banner2'
import Newsletter from '../Components/Newsletter/Newsletter'
import Footer from '../Components/Footer/Footer'

const Homepage = () => {
  return (
    <div>
        
        <Hero/>
        <Features/>
        <FeaturedProduct/>
        <Banner/>
        <NewArrivals/>
        <Banner1/>
        <Banner2/>
        <Newsletter/>
        
    </div>
  )
}

export default Homepage