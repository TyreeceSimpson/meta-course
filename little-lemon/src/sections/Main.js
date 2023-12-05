import styles from './Main.module.css'
import { Hero } from '../components/Hero'
import { MenuItem } from '../components/MenuItem'
import greekSalad from '../icons_assets/greek salad.jpg'
import bruchetta from '../icons_assets/bruchetta.svg'
import lemonDessert from '../icons_assets/lemon dessert.jpg'

export function Main() {
  return (
    <main>
      <Hero />
      <section className={styles.specials}>
        <header className={styles.header}>
          <h2 className={styles.sectionTitle}>This Weeks Specials!</h2>
          <button className={styles.button}>Online Menu</button>
        </header>
        <div className={styles.menu}>
          <MenuItem image={greekSalad} title="Greek Salad" price="£12.99" text="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>
          <MenuItem image={bruchetta} title="Bruchetta" price="£5.99" text="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."/>
          <MenuItem image={lemonDessert} title="Lemon Dessert" price="£5.00" text="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."/>
        </div>
      </section>
    </main>
  )
}