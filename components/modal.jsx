import { useEffect } from "react";

const Modal = () => {
    useEffect(()=>{
        let postContainer=document.getElementById('single-post__wrapper')
        postContainer.style.display='none'
    },[])
    return (
       <div className='modalx'>
           <div className="modalx-title">
               <p>Search</p>
           </div>
           <div className="modalx-searchBox">
                <form>
                    <input type="text" placeholder='Search' />
                    <button>Search</button>
                </form>
           </div>
           <div className="modalx-searchedContent">

           </div>
       </div>
    )
}

export default Modal;
