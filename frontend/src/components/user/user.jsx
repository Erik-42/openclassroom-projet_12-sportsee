import './user.module.scss'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function user() {
  return (
    <section className="user">
    <h1 className="user__name">Bonjour {userInfos.userInfos.firstName}</h1>
    <p className="user__text">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  )
}
