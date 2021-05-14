import ReactDOM from 'react-dom'
import Profile from "../../components/profile"
import Image from 'next/image'
import moment from 'moment'
import NewsLetter from "../../components/newsletter"
import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import Disqus from '../../components/disqus'

export async function getServerSideProps({params}){
    let res=await fetch(`http://localhost:5000/post/${params.id}`)
    let data=await res.json()
    return {
       props:{
            post:data.post
       }
    }
}
const PostShower = ({post}) => {
    let[show,setShow]=useState(false)
    let router=useRouter()
    let get=()=>{
        let $=cherrio.load(post.body)
        let img=$('img').toString()
        console.log(img);
    }
    useEffect(()=>{
        let root=document.documentElement
        let scrollDiv=document.createElement('div')
        scrollDiv.id='scroll'
        console.log(router);
        router.pathname == '/'?'':root.appendChild(scrollDiv)
        setShow(true)
    },[])
    show &&  window.addEventListener('scroll',()=>{
        let scrollTop = window.scrollY;
        let docHeader=document.getElementById('single-post__header')
        let docBody=document.getElementById('single-post__body')

        let docHeight=docHeader.offsetHeight + docBody.offsetHeight
        let winHeight = window.innerHeight;
        let scrollPercent = scrollTop / (docHeight - winHeight);
        let scrollPercentRounded = Math.round(scrollPercent * 100);
        document.getElementById("scrollbar").style.background =`
        linear-gradient(to right, var(--text-color) ${scrollPercentRounded}%, var(--back-color) ${scrollPercentRounded}%)`
    })
    let showScrollBar=()=>{
       return ReactDOM.createPortal(<div id='scrollbar' className='scrollbar'></div>,document.getElementById('scroll'))
    }
    return (
        <div className='single-post'>
            {show && showScrollBar()}
            <div  className='single-post__wrapper'>
                    <div id='single-post__header' className='single-post__header'>
                        <div className='single-post__title'>
                            <p>{post.title}</p>
                        </div>
                        <div className='single-post__thumbnail'>
                            <Image src={post.thumbnail.src} alt={post.thumbnail.alt} width='1000' objectFit='contain' height='500'/>
                        </div>
                        <div className='single-post__time'>
                            <p>{moment(post.createdAt).format('L')}</p>
                            <p>{`Views:${post.views}`}</p>
                        </div>
                    </div>
                    <div id='single-post__body' className='single-post__body'>
                        <p dangerouslySetInnerHTML={{ __html: post.body }}></p>
                    </div>
                    <div className='single-post__footer'>
                        <div className='single-post__footer__share'> 
                        <a target='_blank' href='https://www.facebook.com/sharer/sharer.php?https://journal.stacklearner.com/'>
                            <div onClick={()=>get()} className='single-post__footer-btn --facebook'>
                            Facebook
                            </div>
                        </a>
                        <a target='_blank' href='https://twitter.com/share?https://journal.stacklearner.com/'>
                            <div className='single-post__footer-btn --twitter'>
                            Twitter
                            </div>
                        </a>
                        <a href='http://pinterest.com/pin/create/button/?url'>
                            <div className='single-post__footer-btn --pinterest'>
                            Pinterest
                            </div>
                        </a>
                        <a href='http://www.linkedin.com/shareArticle?mini=true&url=[path]&title=[title]&summary=[description]&source=[domain]'>
                            <div className='single-post__footer-btn --linkend'>
                            Linkend
                            </div>
                        </a>
                        <a href='./'>
                            <div className='single-post__footer-btn --qoura'>
                            Quora
                            </div>
                        </a>
                        </div>
                        <NewsLetter/>
                        {show && <Disqus post={post}/>}
                    </div>
            </div>
            <div className='sinle-post__advise'>
                <Profile/>
            </div>
        </div>
    )
}

export default PostShower;
