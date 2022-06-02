import layout from '../components/layout.module.css'
import styles from './Services.module.css'

export default function Services() {
  return (
    <section className={styles.services}>
      <h2 className={styles.servicesHeader}>What I do</h2>
      <div className={layout.sectionDetailRow}>
        <div className={layout.sectionDetailBlock}>
          <h3 className={layout.sectionDetailHeader}>Code</h3>
          <p className={layout.sectionDetailCopy}>
            My passion is creating apps and features with code. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Est laudantium optio
            dicta cum dolorem veniam cumque accusamus eos maxime sed aut
            provident earum id tenetur minus.
          </p>
        </div>
        <div className={layout.sectionDetailBlock}>
          <h3 className={layout.sectionDetailHeader}>CSS</h3>
          <p className={layout.sectionDetailCopy}>
            I've always enjoyed CSS Est, fuga sapiente delectus suscipit
            laudantium optio dicta cum dolorem veniam cumque accusamus.
          </p>
        </div>
        <div className={layout.sectionDetailBlock}>
          <h3 className={layout.sectionDetailHeader}>
            Design &amp; Communication
          </h3>
          <p className={layout.sectionDetailCopy}>
            I love the process of creating and I enjoy working with a team. Est,
            fuga sapiente delectus suscipit laudantium optio dicta cum dolorem
            veniam cumque.
          </p>
        </div>
      </div>
      <div className={styles.servicesButtonContainer}>
        <a className={layout.baseButton} href="/work">
          See my Work
        </a>
      </div>
    </section>
  )
}
