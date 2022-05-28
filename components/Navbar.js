import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <>
      <span>adamgonz</span>
      <button aria-label='toggle navigation'>
        <span></span>
      </button>
      <nav>
        <ul className={styles.navigationItems}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/work">Work</a></li>
        </ul>
      </nav>
    </>
  )
}