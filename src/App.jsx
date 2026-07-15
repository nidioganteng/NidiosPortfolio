import React, { lazy, Suspense } from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import { LanguageProvider } from './context/LanguageContext'

const About = lazy(() => import('./sections/About'))
const Projects = lazy(() => import('./sections/Projects'))
const Contact = lazy(() => import('./sections/Contact'))
const Footer = lazy(() => import('./sections/Footer'))

const App = () => {
  return (
    <LanguageProvider>
      <div className='container mx-auto max-w-7xl'>
        <Navbar />
        <Hero />
        <Suspense>
          <About />
          <Projects />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </LanguageProvider>
  )
}

export default App
