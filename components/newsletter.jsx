import React from 'react'

const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <div className="newsletter-title">
                <p>Subscribe To our Newsletter</p>
            </div>
            <div className="newsletter-box">
                <input type="email" placeholder='enter your email' />
            </div>
            <div className="newletter-tools">
            <button>Subscribe</button>
            <p>Thanks,for subscribe</p>
            </div>
        </div>
    )
}

export default NewsLetter
