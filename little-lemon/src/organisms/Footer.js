import styles from './styles/Footer.module.css'
import image from '../atoms/icons_assets/Logo.svg'
import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={image} alt="Logo" className={styles.image} />
      <ul className={styles.list}>
        <li><NavLink className={styles.link} to="/">Home</NavLink></li>
        <li><NavLink className={styles.link} to="/about">About</NavLink></li>
        <li><NavLink className={styles.link} to="/menu">Menu</NavLink></li>
        <li><NavLink className={styles.link} to="/reservations">Reservations</NavLink></li>
        <li><NavLink className={styles.link} to="/order">Order Online</NavLink></li>
        <li><NavLink className={styles.link} to="/login">Login</NavLink></li>
      </ul>
      <ul className={styles.list}>
        <li className={styles.text}>1 Lemon Street, Chicago</li>
        <li className={styles.text}>98463 749372</li>
        <li className={styles.text}>help@littlelemon.com</li>
      </ul>
      <ul className={styles.list}>
        <li><NavLink to="#" className={styles.link}>X</NavLink></li>
        <li><NavLink to="#" className={styles.link}>Facebook</NavLink></li>
        <li><NavLink to="#" className={styles.link}>Instagram</NavLink></li>
      </ul>
    </footer>
  )
}