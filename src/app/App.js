import React from 'react';
import { Header } from '../common/components/Header';
import './App.css';
import '../utils/style/scrollbar.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <div className="main-container perspective effect-rotatetop">
          <div className="container">
            <div className="wrapper">
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="*" element={<Error />} /> */}
              </Routes>
            </div>
          </div>
        </div>
        <nav className="outer-nav bottom horizontal">
          <a href="#" className="icon-home">Home</a>
          <a href="#" className="icon-project">Project</a>
          <a href="#" className="icon-aboutMe">About Me</a>
          <a href="pages/contact.html" className="icon-contactMe">Contact me</a>
        </nav>
      </Router>
    </React.StrictMode>
  );
}

export default App;
