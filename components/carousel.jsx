import { useEffect } from "react";

const Carouselx = ({title}) => {
    
  // let scroll=()=>{
  //   let content=document.getElementById('content')
  //   let scrollTop=window.scrollY
  //   let contentHeight=content.offsetHeight
  //   let winHeight=window.innerHeight
  //   let scrollPercentage=scrollTop / (contentHeight-winHeight)
  //   let scrollPercentRounded = Math.floor(scrollPercentage * 100)-13
  //   console.log(scrollPercentRounded);
  //   document.getElementById("pb").style.background = 
  //  `linear-gradient(to right, #498 ${scrollPercentRounded}%, #eee ${scrollPercentRounded}%)`;
  //   //alhamdulillah,i have able to understand how bar filling up when we scroll.#allahisalmighty
    
  // }
 
  // if (typeof window !== "undefined") {
  //   // browser code
  //   window.addEventListener('scroll',scroll)
    
  // }
    return (
        <div>
            <p>{title}</p>
          

        
        </div>
    )
}

export default Carouselx;
