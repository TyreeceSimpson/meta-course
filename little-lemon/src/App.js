import { Routes, Route } from 'react-router-dom'
import { Home } from './Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/reservations" element={<Home />}></Route>
    </Routes>
  )
}

export default App
