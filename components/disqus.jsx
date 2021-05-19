import {DiscussionEmbed} from "disqus-react"

let Disqus = ({post}) => {
    const disqusShortname = "digitalgrowerx"  
    const disqusConfig = {
    url: `https://next-blogx.herokuapp.com/post/${post._id}`,
    identifier: post._id, // Single post id
    title: post.title // Single post title
  }
    return (
        <div style={{marginTop:'3%'}}>
          <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
        />
        </div>
         
        
    )
}

export default Disqus;
