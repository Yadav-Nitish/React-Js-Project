import React from 'react'
import people1 from '../../Assets/people/1.png'
import people2 from '../../Assets/people/2.png'
import people3 from '../../Assets/people/3.png'

const Contact = () => {
  return (
    <>
          <section id="contact-details" class="section-p1">
            <div class="details">
                <span>GET IN TOUCH</span>
                <h2>Visit one of our agency locations or contact us today</h2>
                <h3>Head Office</h3>
                <div>
                    <li>
                        <i class='bx bx-map-alt'></i>
                        <p>56 Glassford Street Glassgow G1 1UL New York</p>
                    </li>
                    <li>
                        <i class='bx bx-envelope' ></i>
                        <p>contact@example.com</p>
                    </li>
                    <li>
                        <i class='bx bxs-phone' ></i>
                        <p>+012 345 6789</p>
                    </li>
                    <li>
                        <i class='bx bx-time-five' ></i>
                        <p>Monday to Saturday: 9.00am to 5.00pm</p>
                    </li>
                </div>
            </div>

            <div class="map">
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.3185103400815!2d-3.6908611576192945!3d40.45302552610838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228e23705d39f%3A0xa8fff6d26e2b1988!2sSantiago%20Bernab%C3%A9u%20Stadium!5e0!3m2!1sen!2sin!4v1687112838955!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
        </section>

        <section id="form-details">
            <form action="">
                <span>LEAVE A MESSAGE</span>
                <h2>We love to hear from you</h2>
                <input type="text" placeholder="Your Name"/>
                <input type="text" placeholder="E-mail"/>
                <input type="text" placeholder="Subject"/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                <button class="normal">Submit</button>
            </form>

            <div class="people">
                <div>
                    <img src={people1} alt=""/>
                    <p><span>John Doe</span> Senior Marketing Manager <br/> Phone: + 000 123 456 789 <br/> Email: contact@example.com</p>
                </div>
                <div>
                    <img src={people2} alt=""/>
                    <p><span>William Smith</span> Senior Marketing Manager <br/> Phone: + 000 123 456 789 <br/> Email: contact@example.com</p>
                </div>
                <div>
                    <img src={people3} alt=""/>
                    <p><span>Emma Stone</span> Senior Marketing Manager <br/> Phone: + 000 123 456 789 <br/> Email: contact@example.com</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact