import React from 'react'
import NavBar from './sections/NavBar.jsx'
import Summary from './sections/Summary.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import Experience from './sections/Experience.jsx'
import NavButtons from './sections/NavButtons.jsx'
import FirefliesBackground from './components/FirefliesBackground.jsx'

import { SummaryCarousel } from './sections/SummaryCarousel.jsx'
import PastProjects from './sections/PastProjects.jsx'

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <NavBar />

      {/* <NavButtons /> */}
      
      <SummaryCarousel />
      <About />
      <Projects />
      <PastProjects />
      <Testimonials />
      <Experience />
      <Contact />
      <Footer />

      <FirefliesBackground />
    </main>
  )
}

export default App