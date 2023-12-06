import { useState, initialState } from "react"

export function BookingForm(props) {
  const [date, setDate] = useState(initialState)
  const [time, setTime] = useState(initialState)
  const [guests, setGuests] = useState(initialState)
  const [occasion, setOccasion] = useState(initialState)

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`${date}, ${time}, ${guests}, ${occasion}`)
  }

  function handleDateChange(e) {
    setDate(e.target.value);
    const date = new Date(e.target.value);
    props.updateTimes(date);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" onChange={handleDateChange} />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" onChange={e => setTime(e.target.value)}>
        {props.availableTimes.map((time) => <option key={time}>{time}</option>)}
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