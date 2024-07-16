import React, { } from 'react'
import './user.module.scss'

export default function user({userInfos}) {

  return (
       <section className="user">
      {userInfos ? (
        <>
          <h1 className="user__name">Bonjour {userInfos.userInfos.firstName}</h1>
          <p className="user__text">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </section>
  );
}