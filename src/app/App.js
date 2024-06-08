import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Header } from '../common/components/Header';
import { Home } from './pages/Home'
import { Contact } from './pages/Contact';
import './App.css';
import '../utils/style/scrollbar.css';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [docScroll, setDocScroll] = useState(0);
  const perspectiveWrapperRef = useRef(null);
  const containerRef = useRef(null);

  const handleShowMenu = (ev) => {
    ev.stopPropagation();
    ev.preventDefault();
    setDocScroll(window.scrollY);
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    perspectiveWrapperRef.current.classList.add('modalview');
    setTimeout(() => {
      perspectiveWrapperRef.current.classList.add('animate');
    }, 25);
    setMenuOpen(true);
  };

  const handleCloseMenu = (ev) => {
    if (!isMenuOpen) return;

    if (
      ev.target !== containerRef.current &&
      !containerRef.current.contains(ev.target) &&
      ev.target.id !== 'showMenu'
    )
      return;


    const onEndTransFn = (ev) => {
      if (
        ev.target.className !== 'container' ||
        ev.propertyName.indexOf('transform') === -1
      )
        return;

      perspectiveWrapperRef.current.removeEventListener(
        'transitionend',
        onEndTransFn
      );

      perspectiveWrapperRef.current.classList.remove('modalview', 'animate');
      containerRef.current.classList.remove('transform');

      document.body.scrollTop = document.documentElement.scrollTop = docScroll;
      setMenuOpen(false);
    };

    perspectiveWrapperRef.current.addEventListener(
      'transitionend',
      onEndTransFn
    );

    perspectiveWrapperRef.current.classList.remove('animate');
    containerRef.current.classList.add('transform');
    perspectiveWrapperRef.current.classList.remove('modalview');
    containerRef.current.classList.remove('modalview');
  };

  const handleClick = (ev) => { };

  const handleNavLinkClick = (ev) => {
    ev.preventDefault()
    handleCloseMenu();
  };

  return (
    <React.StrictMode>
      <Router>
        <div
          id="perspective"
          className="perspective effect-rotatetop"
          ref={perspectiveWrapperRef}
          onClick={handleClick}
        >
          <div className="container" ref={containerRef} onClick={handleCloseMenu}>
            <div className="wrapper">
              <Header handleShowMenu={handleShowMenu} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
          <nav className="outer-nav bottom horizontal">
            <Link to="/" className="icon-home" onClick={handleNavLinkClick}>
              Home
            </Link>
            <a href="#home" className="icon-project" onClick={handleNavLinkClick}>
              Start
            </a>
            <a href="#projects" className="icon-project" onClick={handleNavLinkClick}>
              Projects
            </a>
            <a href="#aboutMe" className="icon-aboutMe" onClick={handleNavLinkClick}>
              About Me
            </a>
            <Link to="/contact" className="icon-contactMe" onClick={handleNavLinkClick}>
              Contact me
            </Link>
          </nav>
        </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;
