import React from 'react'
import '../Components/css/theme.css';
import '../Components/css/maincons.css';
import '../Components/css/bootstrap.css'
;
const Header = () => {
  return (
    
    <>
    <header>
    <nav className="navbar navbar-expand-lg navbar-light navbar-float">
      <div className="container">
        <a href="/" className="navbar-brand">Hindustan<span className="text-primary">Tyres.</span></a>

        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="navbarContent">
          <ul className="navbar-nav ml-lg-4 pt-3 pt-lg-0">
            <li className="nav-item active">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/aboutus" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Services</a>
            </li>
            {/* <li className="nav-item">
              <a href="blog.html" className="nav-link">News</a>
            </li> */}
            <li className="nav-item">
              <a href="/contactus" className="nav-link">Contact</a>
            </li>
          </ul>

          <div className="ml-auto">
            <a href="#" className="btn btn-outline rounded-pill">Get a Quote</a>
          </div>
        </div>
      </div>
    </nav>

  
  </header>
    </>
  )
}

export default Header