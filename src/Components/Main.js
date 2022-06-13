import '../Components/css/animate.css';
import React from 'react'
import '../Components/css/theme.css';
import '../Components/css/maincons.css';
import '../Components/css/bootstrap.css';
import bg1 from './img/tyre.png'
import bg2 from './img/tyre2.png'

const Main = () => {
    
  return (
    <>
      <div class="page-banner home-banner">
      <div class="container h-100">
        <div class="row align-items-center h-100">
          <div class="col-lg-6 py-3 wow fadeInUp">
            <h1 class="mb-4 capitalize">TYRE SAFETY FOR ALL DRIVERS</h1>
            <p class="text-lg mb-5">We provides a range of tyres which are compatible with various make and models.</p>

            <a href="#" class="text-secondary  btn-outline border btn ">More Info</a>
            <a href="#" class="btn btn-primary btn-split ml-2">Watch Video <div class="fab"><span class="mai-play"></span></div></a>
          </div>
          <div class="col-lg-6 py-3 wow zoomIn">
            <div class="img-place">
              <img src={bg1} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 py-3 wow zoomIn">
            <div class="img-place text-center">
              <img src={bg2} alt=""/>
            </div>
          </div>
          <div class="col-lg-6 py-3 wow fadeInRight">
            <h2 class="title-section">We're <span class="marked">Dynamic</span> Team of Creatives People</h2>
            <div class="divider"></div>
            <p>We are customer centric service provider and we also offer re-trading & re-soling of tyres, on-site delivery of tyres and fortnight post sale services.</p>
            <div class="img-place mb-3">
              <img src="../assets/img/testi_image.png" alt=""/>
            </div>
            <a href="#" class="btn btn-primary">More Details</a>
            <a href="#" class="btn btn-outline border ml-2">Success Stories</a>
          </div>
        </div>
      </div> 
    </div>
    </>
  )
}

export default Main