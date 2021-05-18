import React, { useEffect } from 'react'
let cheerio=require('cheerio')
let moment=require('moment')
import Link from 'next/link'
const Post = ({img,alt,title,body,time,topic,id}) => {
    
    let truncateText=()=>{
        let text=cheerio.load(body).text()
        if(text.length>190){
            return text.substr(0,170)+'...'
        }else{
            return text
        }
        
    }
    return (
        <div className='post'>
            <div className="col-md-6 post-img__wrapper">
                <img src={img} alt={alt} />
            </div>
            <div className="col-md-6 post-details__wrapper">
                <div className='post-details__tags'>
                    <p>{topic}</p>
                </div>
                <Link  href={`/post/${id}`}>
                <div className='post-details__cover'>
                <p className='post-details__title'>{title}</p>
                <p className='post-details__body'>{truncateText()}</p>
                </div>
                </Link>
                {moment({time}).format('L')}
            </div>
        </div>
    )
}

export default Post;
