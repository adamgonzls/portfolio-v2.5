import Head from 'next/head'
import Image from 'next/image'
import Navbar from './Navbar'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Adam'
export const siteTitle = 'Adam Frontend Dev'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <Navbar />
        {home ? (
          <span>layout js span</span>
        ) : (
          <>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>
                  This is a link: {name}
                </a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer className={styles.footer}>
        <a
          className={styles.footerLink}
          href="mailto:adam@adamgonzalesworks.com"
        >
          Contact me
        </a>
        <ul className={styles.socialList}>
          <li className={styles.socialItem}>
            <a href="https://github.com/adamgonzls">
              <img src="/images/icon-github.svg" alt="" />
              {/* <Image
                priority
                src="/images/icon-github.svg"
                height={24}
                width={24}
                alt="github"
              /> */}
            </a>
          </li>
          <li className={styles.socialItem}>
            <a href="https://www.linkedin.com/in/adamgonzales1/">
              <Image
                priority
                src="/images/icon-linkedin.svg"
                height={24}
                width={24}
                alt="LinkedIn"
              />
            </a>
          </li>
          <li className={styles.socialItem}>
            <a href="https://twitter.com/adamgonzls">
              <Image
                priority
                src="/images/icon-twitter.svg"
                height={24}
                width={24}
                alt="Twitter"
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}
