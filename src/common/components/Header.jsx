import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faBars, faMoon } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export const Header = ({ handleShowMenu }) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

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
        <FontAwesomeIcon
          icon={theme === 'light' ? faMoon : faSun}
          className="icon faIcon"
          onClick={toggleTheme}
        />
        <FontAwesomeIcon
          icon={faBars}
          className="icon faIcon"
          onClick={handleShowMenu}
        />
      </div>
    </header>
  )
}
