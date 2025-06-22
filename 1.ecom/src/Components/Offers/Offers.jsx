import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'
import './Offers.css'

const Offers = () => {
    return (
        <div className='offers' >
            <div className="offers-left">
                <div className='offers-left-text'>
                    <h1>EXCLUSIVE</h1>
                    <h1>Offers For You</h1>
                    <p>ONLY ON BEST SELLERS PRODUCTS</p>
                    <button>Check Now</button>
                </div>

            </div>
            <div className="offers-right">
              <img src={exclusive_image} alt="" />
            </div>

        </div>
    )
}

export default Offers