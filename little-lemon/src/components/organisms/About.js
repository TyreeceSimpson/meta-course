import image from '../../icons_assets/restauranfood.jpg'
import styles from './About.module.css'

export function About() {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <h1 className={styles.title}>Little Lemon</h1>
        <h2 className={styles.subtitle}>Chicago</h2>
        <p className={styles.text}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
      </div>
      <img src={image} alt="Food" className={styles.image} />
    </section>
  )
}
