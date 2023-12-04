import styles from './Nav.module.css';

export function Nav() {
  return (
    <nav>
      <ul className={styles.nav}>
        <li><a href="/home" className={styles.link}>Home</a></li>
        <li><a href="/about" className={styles.link}>About</a></li>
        <li><a href="/menu" className={styles.link}>Menu</a></li>
        <li><a href="/reservations" className={styles.link}>Reservations</a></li>
        <li><a href="/order" className={styles.link}>Order Online</a></li>
        <li><a href="/login" className={styles.link}>Login</a></li>
      </ul>
    </nav>
  )
}
