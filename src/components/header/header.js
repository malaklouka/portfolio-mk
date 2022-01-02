import React , { useState} from 'react';
import './header.css';
import Mobile from './mobile/mobile';
import Web from './web/web';


function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="header">
            <div className="logo">
	<div class="content">
		<h2> MyPortFolio</h2>
		<h2> MyPortFolio</h2>
	</div>
               
            </div>
            <div className="menu">
                <div className="web-menu">
                    <Web />
                </div>
                <div className="mobile-menu">
                    <div onClick={() => setIsOpen(!isOpen)}>
                        <i class="fi fi-rr-apps menu-icon"></i>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} /> }
                </div>
            </div>
        </div>
    )
}

export default Header;