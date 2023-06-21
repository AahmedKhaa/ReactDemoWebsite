import React from "react";
import Featurebox from "./Featurebox";
import fimage1 from "../images/1.png";
import fimage2 from "../images/2.png";
import fimage3 from "../images/3.png";
import fimage4 from "../images/4.png";


function Feature(){
    return(
        <div id="features">
            <h1>OUR COMPANIES</h1>
            <div className="a-container">
            
                    <Featurebox image={fimage1} title="Digital Marketing" text="lorem7"/>
                    <Featurebox image={fimage2} title="Corporate Branding" text="lorem8" />
                    <Featurebox image={fimage3} title="Web Development" text="lorem9"/>
                    <Featurebox image={fimage4} title="Web Development" text="lorem10"/>

                


            </div>
            {/* <div className="a-container1">

                    <Featurebox image={fimage1} title="Digital Marketing" />
                    <Featurebox image={fimage2} title="Corporate Branding" />
                    <Featurebox image={fimage3} title="Web Development" />

            </div> */}

        </div>
    )
}
export default Feature;