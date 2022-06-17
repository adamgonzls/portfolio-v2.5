import Image from 'next/image'
import styles from './Intro.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Intro() {
  const name = 'Adam'

  return (
    <section className={styles.introContainer}>
      <h1 className={styles.introCopyHeader}>
        Hi, I'm <br />
        <strong>Adam</strong>
      </h1>
      <p className={styles.introCopySubtitle}>Frontend Developer</p>
      <img
        className={styles.introImage}
        src="/images/2022-04-adam-bike-glasses-1000.jpeg"
        alt=""
      />
      {/* <div className={styles.introImageContainer}>
        <Image
          priority
          src="/images/2022-04-adam-bike-glasses-400x534.jpeg"
          // className={utilStyles.borderCircle}
          // height={144}
          // width={144}
          layout="fill"
          objectFit="contain"
          alt={name}
        />
      </div> */}
    </section>
  )
}
