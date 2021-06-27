import React from 'react'
import { Link } from 'react-router-dom';

import './hero.styles.scss' 

const Hero = () => {
    return (
        <section className="hero is-large is-info hero-image">
            <div className="hero-body">
                <div classNameName="container">
                    <h1 className="hero-title">
                            Technology Re-imagined For More Than Life
                    </h1>
                    <h2 className="show-now-btn">
                        <Link to='/shop' className="but">
                        <button className="button is-black" id="shop-now">SHOP NOW</button>
                        </Link>
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Hero
