import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Footer from './Components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Education />
      <Footer />
    </>
  )
}

export default App
