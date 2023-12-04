import styles from './Footer.module.css'
import image from '../icons_assets/Logo.svg'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={image} alt="Logo" className={styles.image} />
      <ul className={styles.list}>
        <li><a className={styles.link} href="/home">Home</a></li>
        <li><a className={styles.link} href="/about">About</a></li>
        <li><a className={styles.link} href="/menu">Menu</a></li>
        <li><a className={styles.link} href="/reservations">Reservations</a></li>
        <li><a className={styles.link} href="/order">Order Online</a></li>
        <li><a className={styles.link} href="/login">Login</a></li>
      </ul>
      <ul className={styles.list}>
        <li className={styles.text}>1 Lemon Street, Chicago</li>
        <li className={styles.text}>98463 749372</li>
        <li className={styles.text}>help@littlelemon.com</li>
      </ul>
      <ul className={styles.list}>
        <li><a href="#" className={styles.link}>X</a></li>
        <li><a href="#" className={styles.link}>Facebook</a></li>
        <li><a href="#" className={styles.link}>Instagram</a></li>
      </ul>
    </footer>
  )
}