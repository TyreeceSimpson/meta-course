import { BookingForm } from "../organisms/BookingForm"
import styles from "../organisms/styles/BookingForm.module.css"
import { useReducer } from "react"
import { fetchAPI, submitAPI } from "../BookingsAPI"
import { useNavigate } from "react-router-dom";

export const initialiseTimes = fetchAPI(new Date())
export function reducer(state, action) { return fetchAPI(action) }

export function Reservations() {
  const [availableTimes, dispatch] = useReducer(reducer, initialiseTimes)
  const navigate = useNavigate();

  function submitForm(date, time, guests, occasion) {
    const valid = submitAPI(date, time, guests, occasion)
    valid ? navigate("/confirmation") : navigate("/reservations")
  }

  return (
    <>
      <h1 className={styles.title}>Reservations</h1>
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} submitForm={submitForm}/>
    </>
  )
}
