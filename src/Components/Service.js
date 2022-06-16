/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './css/service.css';
import tyre from './img/tyre_img.png';
const Service = () => {
    return (
        <>
            <h1 className='heading'>Tyres</h1>
            <div class="container1">
                <div class="card1">
                    <div class="imgBx">
                        <img src={tyre} alt="tyre" />
                    </div>

                    <div class="contentBx">

                        <h2>Apollo tyre</h2>

                        <div class="size">
                            <h3>Size :</h3>
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>
                            <span>10</span>
                        </div>
                        <a href="#">View more</a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Service