import React from 'react'
import f1 from '../../Assets/features/f1.png'
import f2 from '../../Assets/features/f2.png'
import f3 from '../../Assets/features/f3.png'
import f4 from '../../Assets/features/f4.png'
import f5 from '../../Assets/features/f5.png'
import f6 from '../../Assets/features/f6.png'
const Features = () => {
  return (
    <div>
         <section id="feature" class="section-p1">
            <div class="fe-box">
                <img src={f1} alt=""/>
                <h6>Free Shipping</h6>
            </div>
            <div class="fe-box">
                <img src={f2} alt=""/>
                <h6>Online Order</h6>
            </div>
            <div class="fe-box">
                <img src={f3} alt=""/>
                <h6>Save Money</h6>
            </div>
            <div class="fe-box">
                <img src={f4} alt=""/>
                <h6>Promotions</h6>
            </div>
            <div class="fe-box">
                <img src={f5} alt=""/>
                <h6>Happy Sell</h6>
            </div>
            <div class="fe-box">
                <img src={f6} alt=""/>
                <h6>F24/7 Support</h6>
            </div>
        </section>
    </div>
  )
}

export default Features