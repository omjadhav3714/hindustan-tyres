import React from 'react'
import './css/footer.css'

const Footer = () => {
  return (
    <>
        <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="footer-col first">
                        <h5 className='heading-footer'>About HT</h5>
                        <p class="p-small">Sync is a landing page HTML template built with Bootstrap 4 for presenting mobile apps</p>
                    </div> 
                    <div class="footer-col second">
                        <h5 className='heading-footer'>Contact Info</h5>
                        <ul class="list-unstyled li-space-lg p-small">
                            <li class="media">
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="media-body">22 Innovation Street, CA, US</div>
                            </li>
                            <li class="media">
                                <i class="fas fa-envelope"></i>
                                <div class="media-body"><a href="#your-link">office@syncmobile.com</a></div>
                            </li>
                            <li class="media">
                                <i class="fas fa-phone-alt"></i>
                                <div class="media-body"><a href="#your-link">+44 376 945 23</a></div>
                            </li>
                        </ul>
                    </div> 
                    <div class="footer-col third">
                        <h5 className='heading-footer'>Value Links</h5>
                        <ul class="list-unstyled li-space-lg p-small">
                            <li><a href="terms-conditions.html">Terms & Conditions</a></li>
                            <li><a href="privacy-policy.html">Privacy Policy</a></li>
                            <li><a href="article-details.html">Article Details</a></li>
                        </ul>
                    </div> 
                    <div class="footer-col fifth">
                        <h5 className='heading-footer'>Other Apps</h5>
                        <ul class="list-unstyled li-space-lg p-small">
                            <li><a href="#your-link">Scientific Calculator</a></li>
                            <li><a href="#your-link">Advanced Timer</a></li>
                            <li><a href="#your-link">Music Store</a></li>
                        </ul>
                    </div>

                    <div class="footer-col fifth">
                        <span class="fa-stack">
                            <a href="/">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-facebook-f fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="/">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-twitter fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="/">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-pinterest-p fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="/">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-instagram fa-stack-1x"></i>
                            </a>
                        </span>
                    </div>
                </div> 
            </div> 
        </div> 
    </div> 
    <div class="copyright">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <p class="p-small">Copyright © 2022 <a href="/aboutus">Hindustan tyres</a></p>
                </div>
            </div>
        </div> 
    </div>
    </>
  )
}

export default Footer