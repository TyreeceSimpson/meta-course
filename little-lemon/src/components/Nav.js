import styles from './Nav.module.css'

export function Nav() {
  return (
    <nav>
      <ul className={styles.nav}>
        <li><a className={styles.link} href="/home">Home</a></li>
        <li><a className={styles.link} href="/about">About</a></li>
        <li><a className={styles.link} href="/menu">Menu</a></li>
        <li><a className={styles.link} href="/reservations">Reservations</a></li>
        <li><a className={styles.link} href="/order">Order Online</a></li>
        <li><a className={styles.link} href="/login">Login</a></li>
      </ul>
    </nav>
  )
}
