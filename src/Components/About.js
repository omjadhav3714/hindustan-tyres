import React from 'react'
import { Link } from 'react-router-dom'
import './css/about.css'

const About = () => {
    return (
        <>
            <div data-testid='about'>

                {/* About Section */}
                <section id="about1">
                    <div className="container">
                        <div className="about-wrapper">
                            <div className="after"><h1>About Us</h1></div>
                            <div className="content">
                                <h5 className="title mb-3 font-weight-bold fs-1">Hindustan Tyres</h5>
                                <div className="row">
                                    <div className="col">
                                        <p>Hindustan Tyres is the leading tyre brand in India. It is built around the core principles of creating stakeholder value through reliability in its products and dependability in its relationships. Consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda soluta nisi cumque nostrum porro repellat iusto neque quos asperiores, aliquam.</p>
                                        <p><b>We are best tyre providers.</b></p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dignissimos modi molestias voluptas possimus perferendis saepe soluta accusantium, obcaecati neque quas ducimus, alias labore nesciunt atque ab voluptatibus quis! Molestiae dicta reprehenderit, quod laborum voluptatem laboriosam! Sapiente vel, fugiat voluptates.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, quis!</p>
                                    </div>
                                </div>
                                <Link to="/Main" >Read More...</Link>
                            </div>
                        </div>
                    </div>
                </section>


                <section>
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-md-6">
                                <div className="img-wrapper">
                                    <div className="after"></div>
                                    <img src="https://thumbs.dreamstime.com/b/tyre-icon-vector-black-white-background-47034537.jpg" className="w-100" alt="About Us" />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <h6 className="title mb-3">We Provide Services</h6>
                                <p>Find the right Car, SUV and Van tyres at Hindustan Tyres from a wide range of tyres that suit all types of vehicles and any type of weather!! sint laboriosam aperiam nihil inventore facilis. Quasi, facilis.</p>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, amet!</p>
                                <button className="btn btn-outline-primary btn-sm">Learn More</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    {/* <!-- Container --> */}
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-md-5">
                                <h6 className="title mb-3">Any Header here</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae autem rem impedit molestiae hic ducimus, consequuntur ullam dolorem quaerat beatae labore explicabo, sint laboriosam aperiam nihil inventore facilis. Quasi, facilis.</p>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, amet!</p>
                                <button className="btn btn-outline-primary btn-sm">Learn More</button>

                            </div>
                            <div className="col-md-6">
                                <div className="img-wrapper">
                                    <div className="after right"></div>
                                    <img src="https://st2.depositphotos.com/1029662/45205/v/380/depositphotos_452052762-stock-illustration-fixing-car-breakdown-broke-repair.jpg?forcejpeg=true" className="w-100" alt="About Us" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End of container  */}
                </section>
                {/* About section ends    */}

            </div>
        </>
    )
}

export default About