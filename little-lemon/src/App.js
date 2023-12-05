import { Routes, Route } from 'react-router-dom'
import { Home } from './Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/menu" element={<Home />}></Route>
      <Route path="/reservations" element={<Home />}></Route>
      <Route path="/order" element={<Home />}></Route>
      <Route path="/login" element={<Home />}></Route>
    </Routes>
  )
}

export default App
