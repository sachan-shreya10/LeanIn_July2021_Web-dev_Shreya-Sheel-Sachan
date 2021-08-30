import React from 'react';
import Social from '../../common/socials';
import "./about.css";
function About() {
    return (<div className="about">
        <div className="about-top">
            <div className="info">
                Hello There. I am <br />
                <span className="name" >Shreya Sheel Sachan</span>.<br />
                I am ambitious and driven. I thrive on challenge and constantly set goals for myself, so I have something to strive towards.
            </div>
            <div className="pic">
                <img src={require("../../../pro.jpg").default} className="pro" />
            </div>

        </div>
        <div >
            <Social />
        </div>
    </div>
    );
}

export default About;
