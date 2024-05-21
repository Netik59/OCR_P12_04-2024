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
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
