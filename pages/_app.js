import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../komponen/layout'
import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout><Component {...pageProps} /></Layout>
  ) 
}

export default MyApp
