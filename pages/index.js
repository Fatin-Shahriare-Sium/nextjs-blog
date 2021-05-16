import Head from 'next/head'
import Carouselx from '../components/carousel'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselComponent from '../components/carousel-component';
import Post from '../components/post';
import Profile from '../components/profile';
import Topic from '../components/topic-setcion';
import digital from '../assets/digital.png'
//https://dev.to/juliannatetreault/json-ld-what-it-is-and-how-dev-uses-it-4d25 [json-ld stack learner using]
export async function getServerSideProps(){
  let res=await fetch(`http://localhost:5000/post/all`)
  let data=await res.json()
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
   <>
   <Head>
    <link href="/static/favicons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png"/>
    <link href="/static/favicons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png"/>
     <title>Digital Grower - Grow with us</title>
     <meta content='We are Digital Grower.We are actually an organization.We want to spread knowledge,news,solution on various thing to the people.We are very regular and active.We think by the grace of Allah,we will able to reach new news and updated news very rapidly.
      Please, stick with us to know the unknown' name='description' />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content='Digital Grower'/>
    <meta property="og:title" content='Digital Grower - Grow with us'/>
    <meta property="og:image" content="https://res.cloudinary.com/sium/image/upload/v1621147035/digital_u6aggr.png"/>
    <meta property="og:image:alt" content="digitalgrower"/>
    <meta property="og:description" content="We are Digital Grower.We are actually an organization.We want to spread knowledge,news,solution on various thing to the people.We are very regular and active.We think by the grace of Allah,we will able to reach new news and updated news very rapidly.
      Please, stick with us to know the unknown"/>
    <meta property="og:url" content=""/>
    {/* website url above */}
    <meta property="twitter:title" content="Digital Grower - Grow with us"/>
    <meta property="twitter:description" content="We are Digital Grower.We are actually an organization.We want to spread knowledge,news,solution on various thing to the people.We are very regular and active.We think by the grace of Allah,we will able to reach new news and updated news very rapidly.
      Please, stick with us to know the unknown" />
    <meta property="twitter:image" content="https://res.cloudinary.com/sium/image/upload/v1621147035/digital_u6aggr.png"/>
    <meta property="twitter:card" content="summary_large_image"/>
    <meta name="twitter:image:alt" content="digitalgrower"/>
   </Head>
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
              {posts.map((sig,index)=><Post key={index} id={sig._id} topic={sig.topic} title={sig.title} body={sig.body} img={sig.thumbnail.src} alt={sig.thumbnail.alt} time={sig.createdAt}/>)}
          </div>
          <div className="home-post__advise">
              <Profile/>
              <Topic/>
          </div>
      
        </div>
  
    </div>
    </>
    
  )
}
