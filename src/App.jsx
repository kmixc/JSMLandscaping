import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'

import Loader from './components/Loader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustSection from './components/TrustSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import ProcessSection from './components/ProcessSection'
import TestimonialsSection from './components/TestimonialsSection'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'
import { initHeroAnimations, initScrollAnimations } from './animations'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [loaderDone, setLoaderDone] = useState(false)

  // Scroll-based animations initialised on mount
  useEffect(() => {
    initScrollAnimations()
    return () => {
      ScrollTrigger.killAll()
      gsap.killTweensOf('*')
      gsap.set('.project-tile', { clearProps: 'clipPath' })
    }
  }, [])

  // Hero animations run after the loader completes
  useEffect(() => {
    if (loaderDone) initHeroAnimations()
  }, [loaderDone])

  return (
    <>
      <Loader onComplete={() => setLoaderDone(true)} />
      <Nav />
      <Hero />
      <TrustSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </>
  )
}

export default App

