import React from 'react';
import "./mobile.css";
function Mobile({ isOpen, setIsOpen }) {
    return (<div className="mobile">
        <div className="close" onClick={() => setIsOpen(!isOpen)}>
            <i class="fi-rr-cross"></i>
        </div>
        <div className="mob-options">
        <div className="mob-option">
            <a href="#project">
                Projects
            </a>
        </div>
        <div className="mob-option">
            <a href="#skills">
                Skills
            </a>
        </div>
        <div className="mob-option">
            <a href="#contact">
                Contact
            </a>
        </div>
        </div>
    </div>
    );
}

export default Mobile;