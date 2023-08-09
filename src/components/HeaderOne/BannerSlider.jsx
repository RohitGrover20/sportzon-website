import Script from 'next/script'
import React from 'react'

function BannerSlider() {
    return (
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 px-0 our-banner" id="hero-slider">
                {/* <div className="our-banner" id="hero-slider"> */}
                <div className="single-items" style={{ height: "500px" }}>
                    <img className="w-100" src="https://i.pinimg.com/originals/65/0a/a5/650aa548ad4fd994f70160ab0974b5b4.jpg" />
                </div>
                <div className="single-items" style={{ height: "500px" }}><img className="w-100" src="assets/img/hero2.png" /></div>
                <div className="single-items" style={{ height: "500px" }}><img className="w-100" src="assets/img/hero3.png" /></div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default BannerSlider