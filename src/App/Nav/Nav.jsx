import React, {useState, useEffect} from 'react';
import './Nav.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

    const [showMenu, updateShowMenu] = useState(false);

    const handleHamburgerClick = () => {
         console.log('Hamburger Click');

         if (showMenu === false){
             updateShowMenu(true);
         } else {
             updateShowMenu(false);
         }
    }

    const handleWinsowResize = () => {
        if (window.innerWidth > 599){
            updateShowMenu(true);
        } else {
            updateShowMenu(false);
        }
    }

    useEffect (()=>{
        window.addEventListener('resize', handleWinsowResize);
        handleWinsowResize();
    },[]);

    return (
         <nav className='Nav'>
            <div className="hamburger" onClick={handleHamburgerClick}> 
                <FontAwesomeIcon icon={ faBars }  />
            </div>
            { 
               showMenu &&
            <div className="link">
                <a href="#">Welcome</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </div>
            }
        </nav>
    )
};

export default Nav;