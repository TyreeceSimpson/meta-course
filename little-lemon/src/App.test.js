import { render, screen } from '@testing-library/react'
import { Reservations, initialiseTimes, updateTimes } from './pages/Reservations'

test('Renders the Reservations heading', () => {
  render(<Reservations />)
  const headingElement = screen.getByText("Reservations")
  expect(headingElement).toBeInTheDocument()
})

test('Checks initializeTimes', () => {
  expect(initialiseTimes).toStrictEqual(["1:00"])
})

test('Checks updateTimes', () => {
  const times = updateTimes()
  expect(times).toBe(initialiseTimes)
})
