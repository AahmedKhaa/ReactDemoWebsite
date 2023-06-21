import React from "react";

function Contact(){
    return(
    <div id="contact">
        <h1>ContactUs</h1>
        <form>
            <input type="text" placeholder="Full Name" required/>
            <input type="text" placeholder="Type Your Email" required/>
            <textarea placeholder="Write here ......." name="message"></textarea>
            <input type="submit" value="Send"/>

        </form>

    </div>
    )
}
export default Contact;