import React from 'react'
import "./Hero.css"
import Cosmik from "./images/cosmik.svg"
import Mark from "./images/mark.svg"
const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>
                <div className='hero__container'>
                    <ul className='hero__list'>
                        <li className='hero__item'>
                            <a className='hero__link' href="#">Next genaretion platform</a>
                            <h1 className='hero__title'>Artificial intelligence & Syber security</h1>
                            <p className='hero__text'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                            <span>
                                <button className='hero__btn'><a href="#">Get Started</a></button>
                                <button className='hero__btn'><a href="#">Watch Video</a></button>
                            </span>
                        </li>
                        <li><img src={Cosmik} alt="" /></li>
                    </ul>
                    <div className="hero__marquee">
                        <img src={Mark} alt="scrolling mark" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero