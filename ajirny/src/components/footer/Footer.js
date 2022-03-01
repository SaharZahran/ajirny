import React from 'react'
import "./Footer.css";
import logo from './logo.png'



const Footer = () => {
  return (
    <div>
        <section class="contact-area footersection" id="contact">
        <div class="footer-container">
            {/* <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="contact-content text-center">

                        <div class="contact-social">
                            <ul>
                                <li className='footer-li'><a class="hover-target" href="*"><i class="fab fa-facebook-f"></i></a></li>
                                <li className='footer-li'><a class="hover-target" href="*"><i class="fab fa-linkedin-in"></i></a></li>
      
    
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </section>
    
    <footer>
        <p><img src={logo} alt="logo"/>Copyright &copy; 2019All Rights Reserved.</p>
    </footer>
    </div>
  )
}


export default Footer;
