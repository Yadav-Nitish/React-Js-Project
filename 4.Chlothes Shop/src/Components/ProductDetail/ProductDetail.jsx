import React from 'react'
import f1 from '../../Assets/products/f1.jpg'
import f2 from '../../Assets/products/f2.jpg'
import f3 from '../../Assets/products/f3.jpg'
import f4 from '../../Assets/products/f4.jpg'

import n1 from '../../Assets/products/n1.jpg'
import n2 from '../../Assets/products/n2.jpg'
import n3 from '../../Assets/products/n3.jpg'
import n4 from '../../Assets/products/n4.jpg'

import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const ProductDetail = () => {
    return (
        <>

            <section id="prodetails" class="section-p1">
                <div class="single-pro-image">
                    <img src={f1} width="100%" id="MainImg" alt="" />

                    <div class="small-img-group">
                        <div class="small-img-col">
                            <img src={f1} width="100%" class="small-img" alt="" />
                        </div>
                        <div class="small-img-col">
                            <img src={f2} width="100%" class="small-img" alt="" />
                        </div>
                        <div class="small-img-col">
                            <img src={f3} width="100%" class="small-img" alt="" />
                        </div>
                        <div class="small-img-col">
                            <img src={f4} width="100%" class="small-img" alt="" />
                        </div>
                    </div>
                </div>

                <div class="single-pro-details">
                    <h6>Home / T-Shirt</h6>
                    <h4>Men's Fashion T Shirt</h4>
                    <h2>₹2499</h2>
                    <select>
                        <option>Select Size</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>XL</option>
                    </select>
                    <input type="number" value="1" />
                    <button class="normal">Add To Cart</button>
                    <h4>Product Details</h4>
                    <span>The Classic Cotton T-Shirt is a versatile and comfortable wardrobe essential suitable for both men and women. It is crafted from high-quality, 100% combed cotton fabric, ensuring a soft and breathable feel against the skin. The T-shirt features a timeless design, making it perfect for various occasions and everyday wear.</span>
                </div>
            </section>

            <section id="product1" class="section-p1">
                <h2>Featured Products</h2>
                <p>Summer Collection New Modern Design</p>
                <div class="pro-container">
                    <div class="pro">
                        <img class="shirt" src={n1} alt="" />
                        <div class="des">
                            <span>adidas</span>
                            <h5>Cartoon Astronaut T-Shirts</h5>
                            <div class="star">
                                <FaStar class='bx bxs-star' />
                                <FaStar class='bx bxs-star' />
                                <FaStar class='bx bxs-star' />
                                <FaStar class='bx bxs-star' />
                                <FaStar class='bx bxs-star' />
                            </div>
                            <h4>₹2999</h4>
                        </div>
                        <a href="#"><FaShoppingCart class='bx bx-cart cart' /></a>
                    </div>
                    <div class="pro">
                        <img class="shirt" src={n2} alt="" />
                        <div class="des">
                            <span>adidas</span>
                            <h5>Cartoon Astronaut T-Shirts</h5>
                            <div class="star">
                                <FaStar class='bx bxs-star' />
                                <FaStar class='bx bxs-star' />
                                <FaStar class='bx bxs-star' />
                                <FaStar class='bx bxs-star' />
                                <FaStar class='bx bxs-star' />
                            </div>
                            <h4>₹2999</h4>
                        </div>
                        <a href="#"><FaShoppingCart class='bx bx-cart cart' /></a>
                    </div>
                    <div class="pro">
                        <img class="shirt" src={n3} alt="" />
                        <div class="des">
                            <span>adidas</span>
                            <h5>Cartoon Astronaut T-Shirts</h5>
                            <div class="star">
                                <FaStar class='bx bxs-star' />
                                <FaStar class='bx bxs-star' />
                                <FaStar class='bx bxs-star' />
                                <FaStar class='bx bxs-star' />
                                <FaStar class='bx bxs-star' />
                            </div>
                            <h4>₹2999</h4>
                        </div>
                        <a href="#"><FaShoppingCart class='bx bx-cart cart' /></a>
                    </div>
                    <div class="pro">
                        <img class="shirt" src={n4} alt="" />
                        <div class="des">
                            <span>adidas</span>
                            <h5>Cartoon Astronaut T-Shirts</h5>
                            <div class="star">
                                <FaStar class='bx bxs-star' />
                                <FaStar class='bx bxs-star' />
                                <FaStar class='bx bxs-star' />
                                <FaStar class='bx bxs-star' />
                                <FaStar class='bx bxs-star' />
                            </div>
                            <h4>₹2999</h4>
                        </div>
                        <a href="#"><FaShoppingCart class='bx bx-cart cart' /></a>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ProductDetail