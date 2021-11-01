import React, { useRef, useState } from 'react';
import "./header.css";
import Mobile from './mobile';
import Web from './web';
function Header() {
    const [isOpen,setIsOpen]=useState(false);
    return (<div className="header">
        <div className="logo">
            Portfolio
        </div>
        <div className="menu">
            <div className="webmenu">
                <Web />
            </div>
            <div className="mob-menu">
                <div onClick={()=>setIsOpen(!isOpen)}>
                <i class="fi-rr-apps menu-icon"></i>
                </div>
                {isOpen&&<Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
            </div>
        </div>
    </div>
    );
}

export default Header;