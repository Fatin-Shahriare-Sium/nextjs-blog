
import fbb from '../assets/fbb.svg'
import twb from '../assets/twb.svg'
import pinb from '../assets/pinb.svg'
import linkb from '../assets/linkb.svg'
import fw from '../assets/fw.svg'
import tww from '../assets/tww.svg'
import pinw from '../assets/pinw.svg'
import linkw from '../assets/linkw.svg'
import youtube from '../assets/youtube.svg'
import useChangeTheme from './hooks/useChangeTheme'
import { useEffect, useState } from 'react'
const Profile = () => {
    let {dark}=useChangeTheme()

    return (
        <div className='profile'>
            <div className='profile-name'>
                    <p>Digital Grower</p>
            </div>
            <div className='profile-socialLinks'>
               
                <a href='/d.'><img className='profile-socialLinks__fb' src={dark?fw:fbb} alt="" /></a>
                <img className='profile-socialLinks__tw' src={dark?tww:twb} alt="" />
                <img className='profile-socialLinks__pin' src={dark?pinw:pinb} alt="" />
                <img className='profile-socialLinks__link' src={dark?linkw:linkb} alt="" />
                <img className='profile-socialLinks__you' src={dark?youtube:linkb} alt="" />
            </div>
        </div>
    )
}

export default Profile;
