import Layout from '../components/layout'
import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/layout.css'
import '../styles/home.css'
import '../styles/post.css'
import '../styles/section.css'
import '../styles/profile.css'
import '../styles/newsletter.css'
import '../styles/carousel-component.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
