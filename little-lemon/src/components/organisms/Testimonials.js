import { Review } from '../molecules/Review'
import styles from './Testimonials.module.css'

export function Testimonials() {
  return <section className={styles.testimonials}>
    <header>
      <h2 className={styles.headerText}>Testimonials</h2>
    </header>
    <div className={styles.reviews}>
      <Review />
      <Review />
      <Review />
      <Review />
    </div>
  </section>
}
