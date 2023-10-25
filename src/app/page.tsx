import styles from './page.module.scss'

import { SectionProjects } from '@/widgets/project-slides'
import { Navbar } from '@/widgets/navbar'

export default function HomePage() {
  return (
    <main className={styles.wrapper}>
      <Navbar />

      <section id='about' className={styles.about}>
        <h1>About</h1>
      </section>

      <section id='team' className={styles.team}>
        <h1>Team</h1>
      </section>

      <SectionProjects />

      <section id='contact' className={styles.contact}>
        <h1>Contact</h1>
      </section>
    </main>
  )
}
