import React from 'react'
import './sidebar.module.scss'
import iconeMeditation from '../../assets/icones/icon-meditation.svg'
import iconeNatation from '../../assets/icones/icon-natation.svg'
import iconeVelo from '../../assets/icones/icon-velo.svg'
import iconeMusculation from '../../assets/icones/icon-musculation.svg'

export default function sidebar() {
  return (
    <div className="sidebar">sidebar</div>
    <nav className="sidebar__nav">
        <Navlink to="#" className="sidebar__nav__link">
            <img src={iconeMeditation} alt="Méditation"/>
        </Navlink>
        <Navlink to="#" className="sidebar__nav__link">
            <img src={iconeNatation} alt="Natation"/>
        </Navlink>
        <Navlink to="#" className="sidebar__nav__link">
            <img src={iconeVelo} alt="Vélo"/>
        </Navlink>
        <Navlink to="#" className="sidebar__nav__link">
            <img src={iconeMusculation} alt="Musculation"/>
        </Navlink>
         <p className="sidebar__copyright">Copyright SportSee 2020</p>
    </nav>
  )
}
