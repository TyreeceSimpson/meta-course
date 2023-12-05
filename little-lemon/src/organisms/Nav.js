import styles from './styles/Nav.module.css'
import { NavLink } from "react-router-dom";

export function Nav() {
  return (
    <nav>
      <ul className={styles.nav}>
        <li><NavLink className={styles.link} to="/">Home</NavLink></li>
        <li><NavLink className={styles.link} to="/about">About</NavLink></li>
        <li><NavLink className={styles.link} to="/menu">Menu</NavLink></li>
        <li><NavLink className={styles.link} to="/reservations">Reservations</NavLink></li>
        <li><NavLink className={styles.link} to="/order">Order Online</NavLink></li>
        <li><NavLink className={styles.link} to="/login">Login</NavLink></li>
      </ul>
    </nav>
  )
}
