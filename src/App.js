import React from 'react';
import Navbar from './component/Navbar';
import Header from './component/Header';
import Feature from './component/Feature';
// import Offer from './component/Offer';
import About from './component/About'
import Contact from './component/Contact';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Feature/>
      {/* <Offer/> */}
      <About/>
      <Contact/>
      
    </div>
  );
}

export default App;
