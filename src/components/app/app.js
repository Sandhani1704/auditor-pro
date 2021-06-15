import './app.css';
import React from 'react';
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

  const [isActive, setIsActive] = React.useState(false)
  // const activeFromPx = 20;
  // const activeToPx = 100;

  // const headerRef = React.useRef();

  // React.useEffect(() => {
  //   setIsActive(true)
  // }, [])

  React.useEffect(() => {

    const scrollHandler = (evt) => {

      if (evt?.target?.classlist?.contains('about-profit')) {

        const header = document.querySelector('.header');
        header.classList.add('header_about-profit');
      }

    }
    document.addEventListener('scroll', scrollHandler)
    return function () {
      document.removeEventListener('scroll', scrollHandler)
    }


  }, [])


  // console.log('scroll')
  // if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
  //   const header = document.querySelector('.header');
  //   header.classList.add('header_about-profit');
  // }

  // const handleScroll = () => {
  //     const top = headerRef.current
  //   top.getBoundingClientRect()
  //   if (top > activeFromPx && top < activeToPx && !isActive) {
  //     setIsActive(true);
  //   }
  //   if ((top <= activeFromPx || top >= activeToPx) && isActive) {
  //     setIsActive(false);
  //   }
  // }

  // React.useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //     },)



  return (
    <div className="app">
      <div className="header-background">
        <Header />
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
