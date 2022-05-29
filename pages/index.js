import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Intro from '../components/Intro'
import Services from '../components/Services'
import Work from '../components/Work'
import About from '../components/About'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Intro />
      <Services />
      <Work />
      <About />
    </Layout>
  )
}
