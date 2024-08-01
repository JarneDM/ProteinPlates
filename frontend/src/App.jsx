import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './pages/NavBar.jsx';
import './App.css';
import AddRecipe from './pages/AddRecipe.jsx';
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
            <Route path='/pages/about' element={<About />} />
            <Route path='/pages/bulk' element={<Bulk />} />
            <Route path='/pages/snacks' element={<Snacks />} />
            <Route path='/pages/cut' element={<Cut />} />
            <Route path='/pages/AddRecipe' element={<AddRecipe />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
