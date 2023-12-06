import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Reservations } from './pages/Reservations'
import { Header } from './organisms/Header'
import { Footer } from './organisms/Footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<Home />}></Route>
        <Route path="/menu" element={<Home />}></Route>
        <Route path="/reservations" element={<Reservations />}></Route>
        <Route path="/order" element={<Home />}></Route>
        <Route path="/login" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
