import React from 'react';
import './contact.css';
import Separator from "../../commmon/separator/index";
import SocialContact from "../../commmon/social/index";

function Contact() {
    return ( 


        <div className="contact">
        <Separator />
        <label className="section-title"> Contact </label>
        <div className="contact-container">
            <div className="contact-left">
                <p className='touch'>Want to get in touch ? Contact me on any of the platform</p>
                <SocialContact />
            </div>
            <div className="download">
                <a download href={require("../../../img/resume.pdf").default} >
                <i class="fi fi-rr-cloud-download download-icon"></i>
                    Download Resume
                </a>
            </div>
        </div>
    </div>
  
    )
}

export default Contact;