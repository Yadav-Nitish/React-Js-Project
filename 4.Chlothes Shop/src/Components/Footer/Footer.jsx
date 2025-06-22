import React from 'react'
import logo from '../../Assets/logo.png'
import app from '../../Assets/pay/app.jpg'
import pay from '../../Assets/pay/pay.png'
import play from '../../Assets/pay/play.jpg'
const Footer = () => {
  return (
    <div>
          <footer class="section-p1">
            <div class="col">
                <img class="logo" src={logo} alt=""/>
                <h4>Contact</h4>
                <p><strong>Address:</strong> 562 Wellington Road, Street 32, San Francisco</p>
                <p><strong>Phone:</strong> +01 2222 345 / (+91) 0 123 456 789</p>
                <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
                <div class="follow">
                    <h4>Follow us</h4>
                    <div class="icon">
                        <i class='bx bxl-facebook'></i>
                        <i class='bx bxl-twitter' ></i>
                        <i class='bx bxl-instagram' ></i>
                        <i class='bx bxl-pinterest-alt' ></i>
                        <i class='bx bxl-youtube' ></i>
                    </div>
                </div>
            </div>

            <div class="col">
                <h4>About</h4>
                <a href="#">About us</a>
                <a href="#">Devlivery Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Contact Us</a>
            </div>

            <div class="col">
                <h4>My Account</h4>
                <a href="#">Sign In</a>
                <a href="#">View Cart</a>
                <a href="#">My Wishlist</a>
                <a href="#">Track My Order</a>
                <a href="#">Help</a>
            </div>

            <div class="col install">
                <h4>Install App</h4>
                <p>From App Store or Google Play</p>
                <div class="row">
                    <img src={app} alt=""/>
                    <img src={play} alt=""/>
                </div>
                <p>Secured Payment Gateways</p>
                <img src={pay} alt=""/>
            </div>

            <div class="copyright">
                <p>© 2023, Sahad cmd - HTML CSS Ecommerce Template</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer