import React from 'react'
import './home.module.scss'
import { Link } from 'react-router-dom'

export default function home() {
  return (
    <>
    <div className='test'>Test de configuration de SASS</div>

    <div className='colonne'>
        <Link to="/dashboard/12" className="colonne__user">User 12</Link>
        <Link to="/dashboard/18" className="colonne__user">User 18</Link>
    </div>
    </>
  )
}
