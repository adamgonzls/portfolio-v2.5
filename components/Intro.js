import Image from 'next/image';
import styles from './intro.module.css'
import utilStyles from '../styles/utils.module.css';

export default function Intro() {
  const name = 'Adam';

  return (
    <div className={styles.introContainer}>
      <div>
        <Image
          priority
          src="/images/2022-04-adam-bike-glasses-400x534.jpeg"
          // className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt={name}
        />
      </div>
      <div className="introCopy">
        <h1>Hi, I am <br />Adam</h1>
        <h2>Frontend Dev</h2>
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </div>
    </div>
  )
}