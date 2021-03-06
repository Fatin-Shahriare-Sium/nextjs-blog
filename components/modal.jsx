import { useEffect, useState } from "react";
import SmallPost from "./small-post";

const Modal = () => {
    let[topic,setTopic]=useState('')
    let[searchedPost,setSearchedPost]=useState('')
    let handleSearch=(e)=>{
        e.preventDefault()
        setTopic('')
        fetch(`https://next-blogx.herokuapp.com/search/${e.target.value}`,{
            method:'GET'
        }).then(res=>res.json())
        .then(data=>{
            setSearchedPost(data.searchedPost)
        })
    }
    useEffect(()=>{
        fetch(`https://next-blogx.herokuapp.com/search/topic/${topic}`,{
            method:'GET'
        }).then(res=>res.json())
        .then(data=>{
            setSearchedPost(data.searchedPost)
        })
    },[topic])
    return (
       <div id='modalx' className='modalx'>
        
           <div className="modalx-searchBox mt-5">
               
                    <input onChange={(event)=>handleSearch(event)}  type="text" placeholder='Search' />
                
                <div className="modalx-searchBox-keyword">
                    <p onClick={()=>setTopic('digital')} className={topic=='digital'?'active-topic':''}>Digital Marketing</p>
                    <p onClick={()=>setTopic('credit')} className={topic=='credit'?'active-topic':''}>Credit</p>
                    <p onClick={()=>setTopic('money')} className={topic=='money'?'active-topic':''}>Money Earning</p>
                    <p onClick={()=>setTopic('civil')} className={topic=='civil'?'active-topic':''}>Civil Enginnering</p>
                    <p onClick={()=>setTopic('miscellaneous')} className={topic=='miscellaneous'?'active-topic':''}>Miscellaneous</p>
                </div>
           </div>
           <div className="modalx-searchedContent">
                {searchedPost && searchedPost.map((sig,index)=><SmallPost post={sig}/>)}
           </div>
       </div>
    )
}

export default Modal;
