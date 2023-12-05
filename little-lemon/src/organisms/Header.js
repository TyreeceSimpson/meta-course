import { Nav } from '../organisms/Nav'
import logo from '../atoms/icons_assets/Logo.svg'
import styles from './styles/Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Little Lemon" className={styles.logo}/>
      <Nav />
    </header>
  )
}
