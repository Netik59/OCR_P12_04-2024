import { Link, useLocation } from 'react-router-dom'

export const Nav = ({ handleNavLinkClick }) => {
  const location = useLocation()

  if (location.pathname === '/') {
    return (
      <nav className="outer-nav bottom horizontal">
        <a href="#home" className="icon-project" onClick={handleNavLinkClick}>
          Start
        </a>
        <a
          href="#projects"
          className="icon-project"
          onClick={handleNavLinkClick}
        >
          Projects
        </a>
        <a
          href="#aboutMe"
          className="icon-aboutMe"
          onClick={handleNavLinkClick}
        >
          About Me
        </a>
        <Link
          to="/contact"
          className="icon-contactMe"
          onClick={handleNavLinkClick}
        >
          Contact me
        </Link>
      </nav>
    )
  } else if (location.pathname === '/contact') {
    return (
      <nav className="outer-nav bottom horizontal">
        <Link to="/" className="icon-home" onClick={handleNavLinkClick}>
          Home
        </Link>
        <a href="#home" className="icon-project" onClick={handleNavLinkClick}>
          Start
        </a>
        <a
          href="#contact"
          className="icon-project"
          onClick={handleNavLinkClick}
        >
          Form
        </a>
      </nav>
    )
  }

  return null
}
