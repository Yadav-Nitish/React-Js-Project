import React from 'react'
import a6 from '../../Assets/about/a6.jpg'
import video from '../../Assets/about/1.mp4'
const About = () => {
  return (
    <>
       <section id="about-head" class="section-p1">
            <img src={a6} alt=""/>
            <div>
                <h2>Who We Are?</h2>
                <p>Cara is a reputable clothing ecommerce website that has been operating since 1998. With over two decades of experience in the fashion industry, we pride ourselves on offering a curated selection of trendy and high-quality apparel for men and women. Our mission is to provide our customers with a seamless online shopping experience, offering a wide range of stylish clothing, accessories, and footwear.</p>

                <abbr title="">We are committed to staying up-to-date with the latest fashion trends and providing exceptional customer service to ensure our customers look and feel their best.</abbr>

                <br/><br/>

                <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">We are committed to staying up-to-date with the latest fashion trends and providing exceptional customer service to ensure our customers look and feel their best.</marquee>
            </div>
        </section>
            <section id="about-app" class="section-p1">
            <h1>Download Our <a href="#">App</a></h1>
            <div class="video">
                <video autoplay muted loop src={video}></video>
            </div>
        </section>
    </>
    
  )
}

export default About