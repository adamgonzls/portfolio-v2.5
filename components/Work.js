import layout from './layout.module.css'

export default function Work() {
  return (
    <section>
      <h2>My Work</h2>
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
      <div>
        <h3>Quizzical</h3>
        <a href="https://quizzical-alpha.vercel.app/">View Site</a>
      </div>
      <div>
        <h3>Color Scheme Picker</h3>
        <a href="https://color-scheme-picker.netlify.app/" target="_blank">
          View site
        </a>
      </div>
      <div>
        <h3>Some Other Thing</h3>
      </div>
      <div>
        <a href="/work">View my Work</a>
        <a href="https://github.com/adamgonzls" target="_blank">
          Visit my GitHub Profile
        </a>
      </div>
    </section>
  )
}
