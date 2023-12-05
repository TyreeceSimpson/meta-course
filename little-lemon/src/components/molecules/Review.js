import image from '../../icons_assets/Mario and Adrian A.jpg'
import styles from './Review.module.css'

export function Review() {
  return (
    <article className={styles.review}>
      <h3>5 Stars</h3>
      <main className={styles.content}>
        <img src={image} alt="Food" />
        <h4>Mario and Adrian</h4>
      </main>
      <p>Food Description</p>
    </article>
  )
}
