import React from 'react'
import './chartsPerf.module.scss'
import iconEnergy from '../../assets/icones/energy.svg'
import iconChicken from '../../assets/icones/chicken.svg'
import iconApple from '../../assets/icones/apple.svg'
import iconBurger from '../../assets/icones/cheeseburger.svg'

export default function chartsPerf() {
  return (
    <section className='perf'>
      <p>{iconEnergy}</p>
      <p>{iconChicken}</p>
      <p>{iconApple}</p>
      <p>{iconBurger}</p>
    </section>
  )
}
