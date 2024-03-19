import React from 'react';
import { Link } from "react-router-dom";
import './LandingPage.css';

const LandingPage = () =>  {
    return (
        <section className="hero-section">
            <div data-aos="fade-up" className="flex-hero">
                
                <h1>
                    We are <br/>
                    <span className="text-gradient">
                    
                    Here for you 24/7
                    </span>
                </h1>
                    <div className="blob-cont">
                        <div className="blue blob"></div>
                    </div>
                    <div className="blob-cont">
                        <div className="blue1 blob"></div>
                    </div>
                <h4>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque at quae ducimus. Suscipit omnis quibusdam non cum rem voluptatem! 
                </h4>
                <Link to="/services">
                    <button className="button">Get Started</button>
                </Link>
            </div>
        </section>
    )
}

export default LandingPage;