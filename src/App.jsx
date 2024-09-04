import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutus from './components/Aboutus'; 
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  return (  
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/aboutus' element={<Aboutus />} />

        </Routes>

        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
