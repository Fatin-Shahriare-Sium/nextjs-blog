import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
let cheerio=require('cheerio')
const SmallPost = ({post}) => {
    let truncateText=()=>{
        let text=cheerio.load(post.body).text()
        if(text.length>130){
            return text.substr(0,130)+'...'
        }else{
            return text
        }
        
    }
    return (
        <div style={{display:'flex',margin:"1% 0px"}} className='small-post'>
            <div className="col-md-3">
                <Image  src={post.thumbnail.src} objectFit='contain' width='270px' height='130px'/>
            </div>
            <Link href={`/post/${post._id}`}>
            <div style={{fontSize:'1.9rem',fontWeight:'700'}} className="col-md-7">
                <p className='post-details__tags --small'>{post.topic}</p>
                <p>{post.title}</p>
                <p>{truncateText()}</p>
            </div>
            </Link>
        </div>
    )
}

export default SmallPost;
