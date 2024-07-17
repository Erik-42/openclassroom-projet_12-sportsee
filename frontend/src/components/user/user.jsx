import React, { } from 'react'
import styled from'./user.module.scss'

export default function user({userInfos}) {

  return (
       <section className={styled.user}>
      {userInfos ? (
        <>
        <div className={styled.user__h1}>
          <p className={styled.user__h1__bonjour}>Bonjour </p>
          <h1 className={styled.user__h1__name}> {userInfos.userInfos.firstName}</h1>
        </div>
        <p className={styled.user__text}>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </>
      ) : (
        <p className={styled.user__loading}>Loading user data...</p>
      )}
    </section>
  );
}