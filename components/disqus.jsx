import {DiscussionEmbed} from "disqus-react"

let Disqus = ({post}) => {
    const disqusShortname = "digitalgrower"  
    const disqusConfig = {
    url: `http://localhost:3000/post/${post.id}`,
    identifier: post.id, // Single post id
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
