
// export async function getStaticPaths (){
//     let res=await fetch('http://localhost:5000/post/all')
//     let data=await res.json()
//     console.log(data);
//     let paths=data.posts.map((sig,index)=>{return {params:{id:sig._id}}})
//     return{
//         paths,
//         fallback:false
//     }

import Profile from "../../components/profile"

   
// }
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
    return (
        <div className='single-post'>
            <div className='single-post__wrapper'>
                    {post.views}
            </div>
            <div className='sinle-post__advise'>
                <Profile/>
            </div>
            {console.log(post)}
            <p>{post.title}</p>
        </div>
    )
}

export default PostShower;
