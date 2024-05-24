import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './Header'
import { Home } from '../../app/pages/Home'
import { Contact } from '../../app/pages/Contact'

export const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [docScroll, setDocScroll] = useState(0)
  const perspectiveWrapperRef = useRef(null)
  const containerRef = useRef(null)
  const contentWrapperRef = useRef(null)

  const handleShowMenu = (ev) => {
    ev.stopPropagation()
    ev.preventDefault()
    setDocScroll(window.scrollY)
    contentWrapperRef.current.style.top = `${-window.scrollY}px`
    document.body.scrollTop = document.documentElement.scrollTop = 0
    perspectiveWrapperRef.current.classList.add('modalview')
    setTimeout(() => {
      perspectiveWrapperRef.current.classList.add('animate')
    }, 25)
    setMenuOpen(true)
  }

  const handleCloseMenu = (ev) => {
    if (!isMenuOpen) return
    if (
      ev.target !== containerRef.current &&
      !containerRef.current.contains(ev.target) &&
      ev.target.id !== 'showMenu'
    )
      return

    const onEndTransFn = (ev) => {
      if (
        ev.target.className !== 'container' ||
        ev.propertyName.indexOf('transform') === -1
      )
        return
      perspectiveWrapperRef.current.removeEventListener(
        'transitionend',
        onEndTransFn
      )

      perspectiveWrapperRef.current.classList.remove('modalview', 'animate')
      containerRef.current.classList.remove('transform')

      document.body.scrollTop = document.documentElement.scrollTop = docScroll
      contentWrapperRef.current.style.top = '0px'
      setMenuOpen(false)
    }

    perspectiveWrapperRef.current.addEventListener(
      'transitionend',
      onEndTransFn
    )

    perspectiveWrapperRef.current.classList.remove('animate')
    containerRef.current.classList.add('transform')
  }

  const handleClick = (ev) => {}

  return (
    <div
      id="perspective"
      className="perspective effect-rotatetop"
      ref={perspectiveWrapperRef}
      onClick={handleClick}
    >
      <div className="container" ref={containerRef} onClick={handleCloseMenu}>
        <div className="wrapper" ref={contentWrapperRef}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="*" element={<Error />} /> */}
          </Routes>
        </div>
      </div>
      <nav className="outer-nav bottom horizontal">
        <a href="#" className="icon-home">
          Home
        </a>
        <a href="#" className="icon-project">
          Project
        </a>
        <a href="#" className="icon-aboutMe">
          About Me
        </a>
        <a href="pages/contact.html" className="icon-contactMe">
          Contact me
        </a>
      </nav>
      <button id="showMenu" onClick={handleShowMenu}>
        Show Menu
      </button>
    </div>
  )
}
