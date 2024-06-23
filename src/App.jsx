import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './pages/NavBar.jsx';
import './App.css';
import Home from './pages/Home.jsx';
import Bulk from './pages/Bulk.jsx';
import Snacks from './pages/Snacks.jsx';
import Cut from './pages/Cut.jsx';
import About from './pages/About.jsx';

function App() {
  return (
    <>
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/pages/About' element={<About />} />
            <Route path='/pages/Bulk' element={<Bulk />} />
            <Route path='/pages/Snacks' element={<Snacks />} />
            <Route path='/pages/Cut' element={<Cut />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
