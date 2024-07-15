import { Link } from 'react-router-dom'
import './pages/error404/error404.scss'

function Error404() {
  return (
    <div className="error">
      <div className="error__content">
        <p className="error__content__number">404</p>
        <p className="error__content__text">Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <Link to="/" className="error__link">
        Retourner sur le tableau de bord / page de connexion
      </Link>
    </div>
  )
}

export default Error404