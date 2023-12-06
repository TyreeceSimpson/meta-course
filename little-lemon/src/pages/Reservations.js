import { BookingForm } from "../organisms/BookingForm"
import styles from "../organisms/styles/BookingForm.module.css"
import { useReducer } from "react"
// import { fetchAPI } from "../../bookingsAPI";

export const initialiseTimes = ["1:00"]
export function updateTimes(date) { return initialiseTimes }

export function Reservations() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initialiseTimes)

  return (
    <>
      <h1 className={styles.title}>Reservations</h1>
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  )
}
