import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import MyWork from './components/myWork'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <MyWork />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;