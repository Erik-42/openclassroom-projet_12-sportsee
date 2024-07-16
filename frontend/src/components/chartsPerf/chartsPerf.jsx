import React, {} from 'react'
import './chartsPerf.module.scss'
import iconEnergy from '../../assets/icones/energy.svg'
import iconChicken from '../../assets/icones/chicken.svg'
import iconApple from '../../assets/icones/apple.svg'
import iconBurger from '../../assets/icones/cheeseburger.svg'
import { getData } from '../../hooks/getData';
import { useParams } from 'react-router-dom'

export default function chartsPerf() {
 const { userId } = useParams(); // Récupère userId depuis les paramètres d'URL
  const { data: keyData } = getData(userId); // Appel de getData avec userId

  return (
    <section className='perf'>
   
      <div>
        <img src={iconEnergy} alt='Icone Energie'/>
        <h3>{keyData && keyData.calorieCount}kCal</h3><p>Calories</p>
      </div>
      <div>
        <img src={iconChicken} alt='Icone Poulet'/>
        <h3>{keyData && keyData.proteinCount}g</h3><p>Proteines</p>
      </div>
      <div>
        <img src={iconApple} alt='Icone Pomme'/>
        <h3>{keyData && keyData.carbohydrateCount}g</h3><p>Glucides</p>
      </div>
      <div>
        <img src={iconBurger} alt='Icone Burger'/>
        <h3>{keyData && keyData.lipidCount}g</h3><p>Lipides</p>
      </div>
    </section>
  )
}
