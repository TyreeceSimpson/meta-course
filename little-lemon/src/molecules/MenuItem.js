import menuBasket from '../atoms/icons_assets/basket .svg'
import styles from './styles/MenuItem.module.css'

export function MenuItem({ image, title, price, text }) {
  return (
    <article className={styles.menuItem}>
      <img src={image} alt="Menu Item" />
      <div className={styles.content}>
        <div>
          <header className={styles.header}>
            <h3>{title}</h3>
            <h4>{price}</h4>
          </header>
          <p className={styles.text}>{text}</p>
        </div>
        <footer className={styles.footer}>
          <h4>Order a Delivery</h4>
          <img src={menuBasket} alt="Basket" />
        </footer>
      </div>
    </article>
  )
}