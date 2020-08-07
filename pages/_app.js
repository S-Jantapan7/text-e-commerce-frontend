import PageLayout from '../components/PageLayout'
import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <PageLayout>
      <contant className={styles.container}>
        <Component {...pageProps} />
        <Footer />
      </contant>
    </PageLayout>
  )
}

export default MyApp
