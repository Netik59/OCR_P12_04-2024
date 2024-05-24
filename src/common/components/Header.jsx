import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export const Header = ({ handleShowMenu }) => {
  return (
    <header className="header">
      <Link to="/">
        <img
          className="logo"
          src={`${process.env.PUBLIC_URL}/images/logo_portfolio100.webp`}
          alt="Logo du header"
        />
      </Link>
      <div className="nav">
        <FontAwesomeIcon icon={faSun} className="icon" />
        <FontAwesomeIcon
          icon={faBars}
          className="icon"
          onClick={handleShowMenu}
        />
      </div>
    </header>
  )
}
