import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from '../common/components/Header';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Menu } from '../common/components/Menu';
import './App.css';
import '../utils/style/scrollbar.css';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Menu />
      </Router>
    </React.StrictMode>
  );
}

export default App;
