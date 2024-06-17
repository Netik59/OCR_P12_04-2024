import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from '../common/components/Header';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Nav } from '../common/components/Nav';
import { Error } from '../common/components/Error';
import './App.css';
import '../utils/style/scrollbar.css';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const perspectiveWrapperRef = useRef(null);
  const containerRef = useRef(null);

  const handleShowMenu = (ev) => {
    ev.stopPropagation();
    ev.preventDefault();
    perspectiveWrapperRef.current.classList.add('modalview');
    setTimeout(() => {
      perspectiveWrapperRef.current.classList.add('animate');
    }, 25);
    setMenuOpen(true);
  };

  const handleCloseMenu = (ev) => {
    if (!isMenuOpen) return;

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
      setMenuOpen(false);
    };

    perspectiveWrapperRef.current.addEventListener(
      'transitionend',
      onEndTransFn
    );

    perspectiveWrapperRef.current.classList.remove('animate');
    containerRef.current.classList.add('transform');
  };

  const handleNavLinkClick = (ev) => {
    setTimeout(() => {
      handleCloseMenu(ev);
    }, 400);
  };

  return (
    <React.StrictMode>
      <Router>
        <div
          id="perspective"
          className="perspective effect-rotatetop"
          ref={perspectiveWrapperRef}
          onClick={handleCloseMenu}
        >
          <div className="container" ref={containerRef}>
            <div className="wrapper">
              <Header handleShowMenu={handleShowMenu} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </div>
          </div>
          <Nav handleNavLinkClick={handleNavLinkClick} />
        </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;
