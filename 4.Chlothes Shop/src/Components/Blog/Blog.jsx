import React from 'react'
import b1 from '../../Assets/blog/b1.jpg'
import b2 from '../../Assets/blog/b2.jpg'
import b3 from '../../Assets/blog/b3.jpg'
import b4 from '../../Assets/blog/b4.jpg'
import b5 from '../../Assets/blog/b5.jpg'
import b6 from '../../Assets/blog/b6.jpg'
import b7 from '../../Assets/blog/b7.jpg'
import { FaAngleRight } from "react-icons/fa";
const Blog = () => {
  return (
    <>
     <section id="blog">
            <div class="blog-box">
                <div class="blog-img">
                    <img src={b1} alt=""/>
                </div>
                <div class="blog-details">
                    <h4>The Cotton Jersey Zip-Up Hoodie</h4>
                    <p>The Cotton Jersey Zip-Up Hoodie is a versatile and comfortable outerwear piece that combines style and functionality. Crafted from high-quality cotton jersey fabric, this hoodie offers a cozy feel and a casual yet fashionable look.</p>
                    <a href="#">CONTINUE READING</a>
                </div>
                <h1>13/01</h1>
            </div>
            <div class="blog-box">
                <div class="blog-img">
                    <img src={b2} alt=""/>
                </div>
                <div class="blog-details">
                    <h4>How to Style a Quiff</h4>
                    <p>The Quiff is a timeless and sophisticated hairstyle that never fails to make a statement. With its voluminous and sculpted front, it adds a touch of elegance and charm to any look.</p>
                    <a href="#">CONTINUE READING</a>
                </div>
                <h1>13/04</h1>
            </div>
            <div class="blog-box">
                <div class="blog-img">
                    <img src={b3} alt=""/>
                </div>
                <div class="blog-details">
                    <h4>Must-Have Skater Girl Items</h4>
                    <p>Must-Have Skater Girl Items are essential for adding a cool and edgy vibe to your wardrobe. From skateboard to streetwear, these items perfectly capture the skater girl aesthetic.</p>
                    <a href="#">CONTINUE READING</a>
                </div>
                <h1>12/01</h1>
            </div>
            <div class="blog-box">
                <div class="blog-img">
                    <img src={b4} alt=""/>
                </div>
                <div class="blog-details">
                    <h4>Runway-Inspired Trends</h4>
                    <p>Runway-Inspired Trends are the ultimate source of fashion inspiration, bringing high-end style to everyday life. From bold prints to statement accessories, these trends allow you to express your creativity and stay ahead of the fashion curve.</p>
                    <a href="#">CONTINUE READING</a>
                </div>
                <h1>16/01</h1>
            </div>
            <div class="blog-box">
                <div class="blog-img">
                    <img src={b6} alt=""/>
                </div>
                <div class="blog-details">
                    <h4>AW20 Menswear Trends</h4>
                    <p>AW20 Menswear Trends are all about blending sophistication with a touch of rebellion. From tailored outerwear to statement accessories, these trends offer a contemporary and stylish approach to men's fashion.</p>
                    <a href="#">CONTINUE READING</a>
                </div>
                <h1>10/03</h1>
            </div>
        </section>

        <section id="pagination" class="section-p1">
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#"><FaAngleRight class='bx bx-right-arrow-alt' /></a>
        </section>
    </>
     
  )
}

export default Blog