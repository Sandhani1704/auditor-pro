import './app.css';
import React, { useState, useEffect } from 'react'
import Header from '../header/header'
import AuditorInfo from '../auditor-info/auditor-info'
import ScrollAnimation from '../scroll-animation/scroll-animation'
import AboutProfit from '../about-profit/about-profit'
import HowItWorks from '../how-it-works/how-it-works'
import Prices from '../prices/prices'
import Reviews from '../reviews/reviews'
import Questions from '../questions/questions'
import Footer from '../footer/footer'

function App() {
  const [headerIsActive, setHeaderIsActive] = useState(false)
  const [colorHeader, setColorHeader] = useState('')


  useEffect(() => {
    const listenScrollEvent = (event) => {
      const header = document.querySelector('.header')
      const headerCoords = header.getBoundingClientRect()
      const howItWorks = document.querySelector('.how-it-works')
      const howItWorksCoords = howItWorks.getBoundingClientRect()
      const prices = document.querySelector('.prices')
      const pricesCoords = prices.getBoundingClientRect()
      const reviews = document.querySelector('.reviews')
      const reviewsCoords = reviews.getBoundingClientRect()
      if (howItWorksCoords.top <= headerCoords.bottom && howItWorksCoords.bottom >= headerCoords.bottom) {
        setHeaderIsActive(true)
        setColorHeader('lilac')
      } else if (pricesCoords.top <= headerCoords.bottom && pricesCoords.bottom >= headerCoords.bottom) {
        setHeaderIsActive(true)
        setColorHeader('white')
      } else if (reviewsCoords.top <= headerCoords.bottom && reviewsCoords.bottom >= headerCoords.bottom) {
        setHeaderIsActive(true)
        setColorHeader('white')
      } else {
        setHeaderIsActive(false)
        setColorHeader('')
      }
    }
    window.addEventListener('scroll', listenScrollEvent)

    return () => window.removeEventListener('scroll', listenScrollEvent)
  }, [])

  return (
    <div className="app">
      <div className="header-background">
      {headerIsActive ? <Header colorHeader={colorHeader} headerIsActive={headerIsActive} /> : <Header />}
        <AuditorInfo />
        <ScrollAnimation />
        <AboutProfit />
        <HowItWorks />
        <Prices />
        <Reviews />
        <Questions />
        <Footer />
      </div>
    </div >
  );
}

export default App;
