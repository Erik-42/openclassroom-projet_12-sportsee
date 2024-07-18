import React,{} from 'react'
import styled from './sidebar.module.scss'
import iconeMeditation from '../../assets/icones/icon-meditation.svg'
import iconeNatation from '../../assets/icones/icon-natation.svg'
import iconeVelo from '../../assets/icones/icon-velo.svg'
import iconeMusculation from '../../assets/icones/icon-musculation.svg'
import { NavLink } from 'react-router-dom'

export default function sidebar() {
  return (
    <>
    <nav className={styled.sidebar}>
        <div className={styled.sidebar__icones}>
            <NavLink to="#" className={styled.sidebar__icones__link}>
                <img src={iconeMeditation} alt="Méditation"/>
            </NavLink>
            <NavLink to="#" className={styled.sidebar__icones__link}>
                <img src={iconeNatation} alt="Natation"/>
            </NavLink>
            <NavLink to="#" className={styled.sidebar__icones__link}>
                <img src={iconeVelo} alt="Vélo"/>
            </NavLink>
            <NavLink to="#" className={styled.sidebar__icones__link}>
                <img src={iconeMusculation} alt="Musculation"/>
            </NavLink>
        </div>
        <p className={styled.sidebar__copyright}>Copyright SportSee 2020</p>
    </nav>
    </>
  )
}
