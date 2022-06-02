import layout from './layout.module.css'
import styles from './Work.module.css'

export default function Work() {
  return (
    <section className="work">
      <h2 className={styles.workHeader}>My Work</h2>
      <div className={layout.sectionDetailRow}>
        <div className={layout.sectionDetailBlock}>
          <h3 className={layout.sectionDetailHeader}>Quizzical</h3>
          <a href="https://quizzical-alpha.vercel.app/">View Site</a>
        </div>
        <div className={layout.sectionDetailBlock}>
          <h3 className={layout.sectionDetailHeader}>CSS</h3>
          <a href="https://color-scheme-picker.netlify.app/" target="_blank">
            View site
          </a>
        </div>
        <div className={layout.sectionDetailBlock}>
          <h3 className={layout.sectionDetailHeader}>Some Other Thing</h3>
        </div>
      </div>
      <div className={layout.sectionButtonContainer}>
        <a className={layout.baseButton} href="/work">
          View my Work
        </a>
        <br />
        <a
          className={layout.baseButton}
          href="https://github.com/adamgonzls"
          target="_blank"
        >
          Visit my GitHub Profile
        </a>
      </div>
    </section>
  )
}
