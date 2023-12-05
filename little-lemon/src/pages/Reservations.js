import { BookingForm } from "../organisms/BookingForm"
import { Header } from '../organisms/Header'
import styles from "../organisms/styles/BookingForm.module.css"

export function Reservations() {
  return (
    <>
      <Header />
      <h1 className={styles.title}>Reservations</h1>
      <BookingForm />
    </>
  )
}