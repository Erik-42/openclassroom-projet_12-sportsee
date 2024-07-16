/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled from './home.module.scss'
import { Link, NavLink } from 'react-router-dom'

export default function home() {
  return (
    <>
    <nav className={styled.homebar}>
        <div className={styled.homebar__header}>
          <NavLink to='#' className={styled.homebar__header__inscrire}>S'inscrire</NavLink>
          <NavLink to='#' className={styled.homebar__header__connexion}>Connexion</NavLink>
        </div>
    </nav>

    <div className={styled.test}>Votre Coach Sportif</div>

    <div className={styled.users}>
        <Link to="/dashboard/12" className={styled.users__user}>User 12</Link>
        <Link to="/dashboard/18" className={styled.users__user}>User 18</Link>
    </div>

    <img src='../../assets/logo/logo.png' className={styled.home__logo}/>
    </>
  )
}
