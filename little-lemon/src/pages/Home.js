import { Hero } from '../organisms/Hero'
import { Specials } from '../organisms/Specials'
import { Testimonials } from '../organisms/Testimonials'
import { About } from '../organisms/About'

export function Home() {
  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </main>
  )
}