//Page scroll progress bars:https://dev.to/debadeepsen/page-scroll-progress-bars-fjl

import { useState } from "react";
import useChangeTheme from "./hooks/useChangeTheme";
import sun from '../assets/sun.svg'
import night from '../assets/night.svg'
import searchW from '../assets/search.svg'
import searchDark from '../assets/dark-search.svg'
const NavBar = () => {
    let {dark,changeTheme}=useChangeTheme()
    return (
        <div className='navbar'>
           
            <div data-toggle={dark?'day mode':'night mode'} onClick={()=>changeTheme()} className="navbar-toggle">
                <img src={dark?sun:night} alt="" />
            </div>
            <p className='navbar-title'>Digital Grower</p>
            <div className="navbar-search">
                <img src={dark?searchW:searchDark} alt="" />
            </div>
            
        </div>
    )
}

export default NavBar;
