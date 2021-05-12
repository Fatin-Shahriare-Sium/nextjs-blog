//Page scroll progress bars:https://dev.to/debadeepsen/page-scroll-progress-bars-fjl

import { useState } from "react";
import useChangeTheme from "./hooks/useChangeTheme";

const NavBar = () => {
    let {dark,changeTheme}=useChangeTheme()
    return (
        <div className='navbar'>
           
            <div data-toggle={dark?'day mode':'night mode'} onClick={()=>changeTheme()} className="navbar-toggle">
                <img src={dark?'./sun.svg':'./night.svg'} alt="" />
            </div>
            <p className='navbar-title'>Digital Grower</p>
            <div className="navbar-search">
                <img src={dark?'./search.svg':'./dark-search.svg'} alt="" />
            </div>
            
        </div>
    )
}

export default NavBar;
