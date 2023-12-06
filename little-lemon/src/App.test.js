import { render, screen } from '@testing-library/react'
import { Reservations, initialiseTimes, reducer } from './pages/Reservations'
import { BrowserRouter } from 'react-router-dom'

test('Renders the Reservations heading', () => {
  render(<BrowserRouter><Reservations /></BrowserRouter>)
  const headingElement = screen.getByText("Reservations")
  expect(headingElement).toBeInTheDocument()
})

test('Checks initializeTimes', () => {
  expect(initialiseTimes.length).toBeGreaterThan(1)
})

test('Checks updateTimes', () => {
  const times = reducer([], new Date())
  expect(times.length).toBeGreaterThan(1)
})

test('Button is disabled', () => {
  render(<BrowserRouter><Reservations /></BrowserRouter>)
  const submitButton = screen.getByText("Make Your reservation")
  expect(submitButton).toBeDisabled()
})
