"use client"
import About from './About'
import Exclusive from './Exclusive'
import Hero from './Hero'
import MonthSpecial from './MonthSpecial'
import Recommendation from './Recommendation'
import Reserv from './Reserv'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <MonthSpecial />
      <Recommendation />
      <Exclusive />
      <Reserv />
    </>
  )
}
