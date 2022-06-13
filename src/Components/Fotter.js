import React from 'react'

import '../Components/css/theme.css';
import '../Components/css/maincons.css';
import '../Components/css/bootstrap.css';
import airbnb from './img/clients/airbnb.png'
import google from './img/clients/google.png'
import stripe from './img/clients/stripe.png'
import paypal from './img/clients/paypal.png'
import mailchimp from './img/clients/mailchimp.png'

const Fotter = () => {
  return (
    <>
    <div class="page-section client-section">
      <div class="container-fluid">
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 justify-content-center">
          <div class="item wow zoomIn">
            <img src={airbnb} alt=""/>
          </div>
          <div class="item wow zoomIn">
            <img src={google} alt=""/>
          </div>
          <div class="item wow zoomIn">
            <img src={stripe} alt=""/>
          </div>
          <div class="item wow zoomIn">
            <img src={paypal} alt=""/>
          </div>
          <div class="item wow zoomIn">
            <img src={mailchimp} alt=""/>
          </div>
        </div>
      </div> 
    </div> 
    
    </>
  )
}

export default Fotter