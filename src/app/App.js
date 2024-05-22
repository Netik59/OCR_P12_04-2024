import React from 'react';
import { Header } from '../common/components/Header';
import './App.css';
import '../utils/style/scrollbar.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <div class="main-container perspective effect-rotatetop">
          <div class="container">
            <div class="wrapper">
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="*" element={<Error />} /> */}
              </Routes>
            </div>
          </div>
        </div>
        <nav class="outer-nav bottom horizontal">
          <a href="#" class="icon-home">Home</a>
          <a href="#" class="icon-project">Project</a>
          <a href="#" class="icon-aboutMe">About Me</a>
          <a href="pages/contact.html" class="icon-contactMe">Contact me</a>
        </nav>
      </Router>
    </React.StrictMode>
  );
}

export default App;
