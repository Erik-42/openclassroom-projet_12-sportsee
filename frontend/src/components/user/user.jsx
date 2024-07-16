import React, { } from 'react'
import './user.module.scss'
import { useParams } from 'react-router-dom'
import { getData } from '../../hooks/getData';

export default function user() {

  const { userId } = useParams();
  const { data: userInfos} = getData(userId);

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