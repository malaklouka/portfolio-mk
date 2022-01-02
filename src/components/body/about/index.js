import React from 'react';
import SocialContact from '../../commmon/social';
import './about.css';

function About() {
    return (

        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello There 👋 , I am Malak Nakaa.
                    <br /><span className="info-name"> freshly graduated with a master degree in software engineering, having made a retraining in FullStack JS Web Developer.</span>
              <br/>
                    <br/><span className="info-name">On a personal level, I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills and am fully aware of the latest Full stack Development Tools.</span>
<br/>
<br/><span className="info-name">In addition to this, I have the ability to adapt to any type of team environment, I am team oriented and get along with others when working in a group setting. </span>
<br/>
<br/><span className="info-name">I also have the ability to work independently while staying on schedule and meeting those tight deadlines.</span>
                </div>
                <div className="about-photo">
                    <img src={require('../../../img/me.jpg').default}
                    className="picture"
                    alt=""
                    />
                </div>
            </div>
            <div className="flap"></div>

            <SocialContact />
        </div>
    )
}

export default About;