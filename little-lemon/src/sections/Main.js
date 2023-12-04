import styles from './Main.module.css'
import image from '../icons_assets/restauranfood.jpg'

export function Main() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.title}>Little Lemon</h1>
          <h2 className={styles.subtitle}>Chicago</h2>
          <p className={styles.text}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button className={styles.button}>Order Now</button>
        </div>
        <img src={image} alt="Image" className={styles.image} />
      </section>
    </main>
  )
}