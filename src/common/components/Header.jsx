import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faBars } from '@fortawesome/free-solid-svg-icons'
import logoPortfolio from '../../images/logo_portfolio100.webp'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src={logoPortfolio} alt="Logo du header" />
      </Link>
      <div className="nav">
        <FontAwesomeIcon icon={faSun} className="icon" />
        <FontAwesomeIcon icon={faBars} className="icon" />
      </div>
    </header>
  )
}
