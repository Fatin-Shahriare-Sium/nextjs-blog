import Head from 'next/head'
import Carouselx from '../components/carousel'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselComponent from '../components/carousel-component';
import Post from '../components/post';
import Profile from '../components/profile';
import Topic from '../components/topic-setcion';

export async function getStaticProps(){
  let res=await fetch(`http://localhost:5000/post/all`)
  let data=await res.json()
  console.log(data);
  return{
      props:{
          posts:data.posts
      }
  }
}
export default function Home({posts}) {
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
 
  return (
    <div className='home'>
        <div className='home-carousel'>
        <Carousel 
         swipeable={true}
        responsive={responsive}
        >
          {posts.map((sig,index)=><CarouselComponent key={index} title={sig.title} body={sig.body} img={sig.thumbnail.src} alt={sig.thumbnail.alt}/>)}
        </Carousel>
        </div>
        <div className='home-post-container'>
          <div className='home-post'>
              {posts.map((sig,index)=><Post key={index} topic={sig.topic} title={sig.title} body={sig.body} img={sig.thumbnail.src} alt={sig.thumbnail.alt} time={sig.createdAt}/>)}
          </div>
          <div className="home-post__advise">
              <Profile/>
              <Topic/>
          </div>
      
        </div>
    </div>
    
  )
}
