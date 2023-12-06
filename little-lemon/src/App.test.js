import { render, screen } from '@testing-library/react'
import { Reservations, initialiseTimes, reducer } from './pages/Reservations'

test('Renders the Reservations heading', () => {
  render(<Reservations />)
  const headingElement = screen.getByText("Reservations")
  expect(headingElement).toBeInTheDocument()
})

test('Checks initializeTimes', () => {
  expect(initialiseTimes.length).toBeGreaterThan(1)
})

test.skip('Checks updateTimes', () => {
  const times = reducer(new Date())
  console.log(times)
  expect(times.length).toBeGreaterThan(1)
})
