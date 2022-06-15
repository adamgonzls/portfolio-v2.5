import Image from 'next/image'
import layout from './layout.module.css'
import styles from './About.module.css'

export default function About() {
  return (
    <section className="about">
      <h2>Who I am</h2>
      <p className={styles.aboutSubtitle}>
        Frontend developer in the Southwest
      </p>
      <div className={styles.aboutContent}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          quas optio blanditiis esse molestiae voluptatum quasi minima adipisci
          saepe illo expedita corrupti fuga laboriosam, at, accusantium qui
          quaerat tempora! Magni.
        </p>
        {/* <img src="/images/2022-04-adam-bike-glasses-400x534.jpeg" alt="" /> */}
        <Image
          priority
          src="/images/2022-04-adam-bike-glasses-400x534.jpeg"
          // className={utilStyles.borderCircle}
          width={400}
          height={534}
          // layout="responsive"
          alt="Adam"
        />
      </div>
      <div className={layout.sectionButtonContainer}>
        <a className={layout.baseButton} href="/about" target="_blank">
          Get to know me better
        </a>
      </div>
      <br />
    </section>
  )
}
