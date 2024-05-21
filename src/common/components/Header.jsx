import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faBars } from '@fortawesome/free-solid-svg-icons'
import logoPortfolio from '../../images/logo_portfolio100.webp'

export const Header = () => {
  return (
    <header className="header">
      <a href="index.html">
        <img className="logo" src={logoPortfolio} alt="Logo du header" />
      </a>
      <div className="nav">
        <FontAwesomeIcon icon={faSun} className="icon" />
        <FontAwesomeIcon icon={faBars} className="icon" />
      </div>
    </header>
  )
}
