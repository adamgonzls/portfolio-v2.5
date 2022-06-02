import Image from 'next/image'

export default function About() {
  return (
    <section className="about">
      <h2>Who I am</h2>
      <p>Frontend developer in the Southwest</p>
      <div>
        <p>Hi I'm Adam...</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          quas optio blanditiis esse molestiae voluptatum quasi minima adipisci
          saepe illo expedita corrupti fuga laboriosam, at, accusantium qui
          quaerat tempora! Magni.
        </p>
      </div>
      <a href="/about">Get to know me better</a>
      <Image
        priority
        src="/images/2022-04-adam-bike-glasses-400x534.jpeg"
        // className={utilStyles.borderCircle}
        height={144}
        width={144}
        alt="Adam"
      />
    </section>
  )
}
