import { MenuItem } from '../molecules/MenuItem'
import greekSalad from '../atoms/icons_assets/greek salad.jpg'
import bruchetta from '../atoms/icons_assets/bruchetta.svg'
import lemonDessert from '../atoms/icons_assets/lemon dessert.jpg'
import styles from './styles/Specials.module.css'
import { Button } from '../atoms/Button'

export function Specials() {
  return (
    <section className={styles.specials}>
      <header className={styles.header}>
        <h2>This Weeks Specials!</h2>
        <Button text="Online Menu" />
      </header>
      <div className={styles.menu}>
        <MenuItem image={greekSalad} title="Greek Salad" price="£12.99" text="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." />
        <MenuItem image={bruchetta} title="Bruchetta" price="£5.99" text="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil." />
        <MenuItem image={lemonDessert} title="Lemon Dessert" price="£5.00" text="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined." />
      </div>
    </section>
  )
}