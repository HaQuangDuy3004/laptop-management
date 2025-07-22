import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProductGrid from './components/ProductGrid'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import LoadingSpinner from './components/LoadingSpinner'
import About from './components/About'
import Projects from './components/Projects'
import ContactPage from './components/ContactPage'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  //Single Page Application - Không reload trang, chỉ thay đổi nội dung
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  if (isLoading) {
    return <LoadingSpinner />
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />
      case 'projects':
        return <Projects />
      case 'contact':
        return <ContactPage />
      default:
        return (
          <main>
            <HeroSection />
            <ProductGrid />
            <WhyChooseUs />
            <Testimonials />
            <CallToAction />
            <Contact />
          </main>
        )
    }
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onPageChange={handlePageChange} />
      <Navbar onPageChange={handlePageChange} currentPage={currentPage} />
      {renderPage()}
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App