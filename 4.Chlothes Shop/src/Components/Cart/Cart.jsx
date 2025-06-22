import React from 'react'
import cartproduct1 from '../../Assets/products/f1.jpg'
import cartproduct2 from '../../Assets/products/f2.jpg'
import cartproduct3 from '../../Assets/products/f3.jpg'
const Cart = () => {
  return (
    <>
    <section id="cart" class="section-p1">
            <table width="100%">
                <thead>
                    <tr>
                        <td>Remove</td>
                        <td>Image</td>
                        <td>Product</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Subtotal</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><i class='bx bx-x-circle'></i></td>
                        <td><img src={cartproduct1} alt=""/></td>
                        <td>Cartoon Astronaut T-Shirts</td>
                        <td>₹2499</td>
                        <td><input type="number" value="1"/></td>
                        <td>₹2499</td>
                    </tr>
                    <tr>
                        <td><i class='bx bx-x-circle'></i></td>
                        <td><img src={cartproduct2} alt=""/></td>
                        <td>Cartoon Astronaut T-Shirts</td>
                        <td>₹2499</td>
                        <td><input type="number" value="1"/></td>
                        <td>₹2499</td>
                    </tr>
                    <tr>
                        <td><i class='bx bx-x-circle'></i></td>
                        <td><img src={cartproduct3} alt=""/></td>
                        <td>Cartoon Astronaut T-Shirts</td>
                        <td>₹2499</td>
                        <td><input type="number" value="1"/></td>
                        <td>₹2499</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section id="cart-add" class="section-p1">
            <div id="coupon">
                <h3>Apply Coupon</h3>
                <div>
                    <input type="text" placeholder="Enter Your Coupon"/>
                    <button class="normal">Apply</button>
                </div>
            </div>

            <div id="subtotal">
                <h3>Cart Total</h3>
                <table>
                    <tr>
                        <td>Cart Subtotal</td>
                        <td>₹7399</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td>Free</td>
                    </tr>
                    <tr>
                        <td><strong>Total</strong></td>
                        <td><strong>₹7399</strong></td>
                    </tr>
                </table>
                <button class="normal">Proceed to checkout</button>
            </div>
        </section>
    </>
  )
}

export default Cart