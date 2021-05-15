import {DiscussionEmbed} from "disqus-react"

let Disqus = ({post}) => {
    const disqusShortname = "digitalgrowerx"  
    const disqusConfig = {
    url: `http://localhost:3000/post/${post._id}`,
    identifier: post._id, // Single post id
    title: post.title // Single post title
  }
    return (
        <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
        />
         
        
    )
}

export default Disqus;
