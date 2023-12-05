import { Nav } from '../components/molecules/Nav'
import logo from '../icons_assets/Logo.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Little Lemon" className={styles.logo}/>
      <Nav />
    </header>
  )
}
