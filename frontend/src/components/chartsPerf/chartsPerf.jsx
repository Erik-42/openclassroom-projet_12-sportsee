import React, {} from 'react'
import styled from'./chartsPerf.module.scss'
import iconEnergy from '../../assets/icones/energy.svg'
import iconChicken from '../../assets/icones/chicken.svg'
import iconApple from '../../assets/icones/apple.svg'
import iconBurger from '../../assets/icones/cheeseburger.svg'

export default function chartsPerf({userInfos}) {
const keyData = userInfos ? userInfos.keyData: null
  return (
    <>
    <section className={styled.perf}>
   
      <div className={styled.perf__icone}>
        <img src={iconEnergy} alt='Icone Energie' className={styled.perf__icone__img}/>
        <div className={styled.perf__icone__text}>
          <h3 className={styled.perf__icone__text__info}>{keyData && keyData.calorieCount}kCal</h3>
          <p className={styled.perf__icone__text__unite}>Calories</p>
        </div>
      </div>

      <div className={styled.perf__icone}>
        <img src={iconChicken} alt='Icone Poulet' className={styled.perf__icone__img}/>
        <div className={styled.perf__icone__text}>
          <h3 className={styled.perf__icone__text__info}>{keyData && keyData.proteinCount}kCal</h3>
          <p className={styled.perf__icone__text__unite}>Proteines</p>
        </div>
      </div>

      <div className={styled.perf__icone}>
        <img src={iconApple} alt='Icone Pomme' className={styled.perf__icone__img}/>
        <div className={styled.perf__icone__text}>
          <h3 className={styled.perf__icone__text__info}>{keyData && keyData.carbohydrateCount}kCal</h3>
          <p className={styled.perf__icone__text__unite}>Glucides</p>
        </div>
      </div>
      
      <div className={styled.perf__icone}>
        <img src={iconBurger} alt='Icone Burger' className={styled.perf__icone__img}/>
        <div className={styled.perf__icone__text}>
          <h3 className={styled.perf__icone__text__info}>{keyData && keyData.lipidCount}kCal</h3>
          <p className={styled.perf__icone__text__unite}>Lipides</p>
        </div>
      </div>

    </section>
    </>
  )
}
