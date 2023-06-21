import React from "react";
import aboutimage from  '../images/about.png';

function About (){
    return (
        <div id="about">
            <div className="about-image">
                <img src={aboutimage} alt=''/>

            </div>
            <div className="about-text">
                <h1>ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae illum labore dignissimos, doloribus unde possimus culpa sunt nisi, cum, nulla quam illo in quod porro.</p>
                <button>READ MORE</button>
            </div>
        </div>
    )
}
export default About;