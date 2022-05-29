import styles from './Navbar.module.css'
import React, { useState } from 'react'

export default function Navbar() {
  const [navigation, setNavigation] = useState(false)

  console.log(navigation)

  function handleClick() {
    navigation ? setNavigation(false) : setNavigation(true)
  }

  return (
    <>
      <span>adamgonz</span>
      <button onClick={handleClick} aria-label="toggle navigation">
        <span></span>
      </button>
      <nav>
        <ul className={styles.navigationItems}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/work">Work</a>
          </li>
        </ul>
      </nav>
    </>
  )
}
