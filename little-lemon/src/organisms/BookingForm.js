import { useState, initialState } from "react"

export function BookingForm() {
  const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])
  const [date, setDate] = useState(initialState)
  const [time, setTime] = useState(initialState)
  const [guests, setGuests] = useState(initialState)
  const [occasion, setOccasion] = useState(initialState)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`${date}, ${time}, ${guests}, ${occasion}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" onChange={e => setDate(e.target.value)} />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" onChange={e => setTime(e.target.value)}>
        {availableTimes.map((time) => <option>{time}</option>)}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={e => setGuests(e.target.value)} />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" onChange={e => setOccasion(e.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  )
}