import React from 'react';
import { NavLink } from 'react-router-dom'
import styled from "./error404.module.scss"

function Error404() {
  return (
   <main>
        <h1 className={styled.error404}>404</h1>
        <p className={styled.textError}>Oups! La page que vous demandez n`&#39`existe pas.</p>
        <NavLink className={styled.errorLink} to="/" label="Retourner a la page d'accueil">Retourner a la page d`&#39`accueil</NavLink>
    </main>
  )
}

export default Error404