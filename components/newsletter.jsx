import React, { useState } from 'react'

const NewsLetter = () => {
    let[msg,setMsg]=useState('')
    let handleSubscriber=(e)=>{
        e.preventDefault()
        let email=e.target[0].value
        fetch('/api/subscribe',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            setMsg(data.msg)
        })
        console.log(e);
    }
    return (
        <div className='newsletter'>
           <form onSubmit={(event)=>handleSubscriber(event)}>
           <div className="newsletter-title">
                <p>Subscribe To our Newsletter</p>
            </div>
            <div className="newsletter-box">
                <input type="email" placeholder='enter your email' />
            </div>
            <div className="newletter-tools">
            <button type='submit'>Subscribe</button>
            <p>{msg}</p>
            </div>
           </form>
        </div>
    )
}

export default NewsLetter
