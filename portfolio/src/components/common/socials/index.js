import React from 'react';
import "./social.css";
import { SocialData } from '../../data/social';
function Social() {
    const data = SocialData;
    return (<div className="social-cont">
        {data.map((item) => {
            return (
                <a href={item.link}>
                    <div className="social-div">
                        <img src={item.icon} className="social-icon" />
                    </div>
                </a>
            );
        })}
    </div>
    );
}

export default Social;