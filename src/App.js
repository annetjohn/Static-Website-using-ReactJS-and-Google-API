import React from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import Nav from './Nav.js';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="row">
        <Main />

        <Nav />
      </div>

      <Footer />
    </div>
  );
}

export default App;
