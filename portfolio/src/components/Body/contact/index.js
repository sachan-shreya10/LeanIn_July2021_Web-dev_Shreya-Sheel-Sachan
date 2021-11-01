import React from 'react';
import Separator from '../../common/separator';
import Social from '../../common/socials';
import "./contact.css";
function Contact() {
    return <div className="contact">
        <Separator />
        <label className="title">Contact</label>
        <div className="container">
            <div className="left">
                <p>Want to get in touch? Contact me on any of the platform</p>
                <Social />

            </div>
            <div className="download">
                <a download href={require("./resume.pdf").default}>
                    <i class="fi-rr-cloud-download"></i>
                    Download Resume
                </a>
            </div>
        </div>

    </div>
}

export default Contact;