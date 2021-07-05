import React, { useState, useEffect } from "react";
import Header from "../header/header";
import AuditorInfo from "../auditor-info/auditor-info";
import ScrollAnimation from "../scroll-animation/scroll-animation";
import AboutProfit from "../about-profit/about-profit";
import HowItWorks from "../how-it-works/how-it-works";
import Prices from "../prices/prices";
import Reviews from "../reviews/reviews";
import Questions from "../questions/questions";
import Footer from "../footer/footer";
import s from "./app.module.scss";

const App = () => {
  const [hasScrollAnimation, setHasScrollAnimation] = useState(false);

  const [animationInfo, setAnimationInfo] = useState({
    animationStart: "",
    auditorInfoDisplay: "",
    backgroundAboutProfit: "",
  });

  const [color, setColor] = useState({
    headerBackground: "",
    buttonBackground: "",
    buttonColor: "",
    buttonLoginColor: "",
    logoColor: "",
  });

  const [animationHowItWorks, setAnimationHowItWorks] = useState({
    currentImageIndex: 0,
    howItWorksImage: "purple",
  });
  const [stylesHowitWorks, setStylesHowitWorks] = useState({
    background: "lilac",
    fontWeighPink: "",
    fontWeighLilac: "",
    fontWeighSecondPink: "",
    fontWeighSecondLilac: "",
    fontWeighThirdLilac: "",
    text: "Создание чек-листа с присвоением QR-кода",
  });

  useEffect(() => {
    const listenScrollEvent = () => {
      const header = document.getElementById("header");
      const headerCoords = header.getBoundingClientRect();
      const prices = document.getElementById("prices");
      const pricesCoords = prices.getBoundingClientRect();
      const reviews = document.getElementById("reviews");
      const reviewsCoords = reviews.getBoundingClientRect();
      const aboutProfit = document.getElementById("about-profit");
      const aboutProfitCoords = aboutProfit.getBoundingClientRect();
      const auditorInfo = document.getElementById("auditor-info");
      const auditorInfoCoords = auditorInfo.getBoundingClientRect();
      const scrollAnimation = document.getElementById("scroll-animation");
      const scrollAnimationCoords = scrollAnimation.getBoundingClientRect();
      const animation = document.getElementById("animation");
      const animationCoords = animation.getBoundingClientRect();

      if (
        pricesCoords.top <= headerCoords.bottom &&
        pricesCoords.bottom >= headerCoords.bottom
      ) {
        setColor({
          headerBackground: "white",
          logoColor: "black",
          buttonLoginColor: "purple",
          buttonBackground: "purple",
          buttonColor: "white",
        });
      } else if (
        reviewsCoords.top <= headerCoords.bottom &&
        reviewsCoords.bottom >= headerCoords.bottom
      ) {
        setColor({
          headerBackground: "white",
          logoColor: "black",
          buttonLoginColor: "purple",
          buttonBackground: "purple",
          buttonColor: "white",
        });
      } else if (
        aboutProfitCoords.top <= headerCoords.bottom &&
        aboutProfitCoords.bottom >= headerCoords.bottom
      ) {
        setColor({
          headerBackground: "darkPurple",// darkPurple
          logoColor: "white",
          buttonLoginColor: "purple",
          buttonBackground: "purple",
          buttonColor: "white",
        });
      } else if (auditorInfoCoords.top + 150 < headerCoords.bottom) {
        setHasScrollAnimation(true);
        setAnimationInfo({
          animationStart: "start",
          auditorInfoDisplay: "hide",
          backgroundAboutProfit: "background"
        });
        setColor({
          headerBackground: 'purple',
          logoColor: 'white',
          buttonLoginColor: 'white',
          buttonBackground: 'backgroundWhite',
          buttonColor: 'purple',
        })
      } else if (auditorInfoCoords.bottom >= headerCoords.bottom) {
        setHasScrollAnimation(false);
        setAnimationInfo({
          animationStart: "hide",
          auditorInfoDisplay: "start",
          backgroundAboutProfit: ""
        });
        setColor({
          headerBackground: "", // darkPurple
          logoColor: "white",
          buttonLoginColor: "purple",
          buttonBackground: "purple",
          buttonColor: "white",
        });
      }
      // else if (
      //   auditorInfoCoords.top <= headerCoords.bottom &&
      //   auditorInfoCoords.bottom >= headerCoords.bottom &&
      //   hasScrollAnimation
      // ) {
      //   setColor({
      //     headerBackground: 'darkPurple',
      //     logoColor: 'white',
      //     buttonLoginColor: 'purple',
      //     buttonBackground: 'purple',
      //     buttonColor: 'white',
      //   })
      // }
    };

    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  useEffect(() => {
    if (hasScrollAnimation) {
      const timer = setTimeout(() => {
        setColor({
          headerBackground: "purple",
          logoColor: "white",
          buttonLoginColor: "white",
          buttonBackground: "backgroundWhite",
          buttonColor: "purple",
        });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [hasScrollAnimation]);

  useEffect(() => {
    const listenScrollEvent = () => {
      const header = document.getElementById("header");
      const headerCoords = header.getBoundingClientRect();
      const howItWorks = document.getElementById("how-it-works");
      const howItWorksCoords = howItWorks.getBoundingClientRect();
      if (
        animationHowItWorks.currentImageIndex === 0 &&
        howItWorksCoords.top <= headerCoords.bottom &&
        howItWorksCoords.bottom >= headerCoords.bottom
      ) {
        // setMainHeaderZindex('zIndex')
        setColor({
          headerBackground: "lilac",
          logoColor: "black",
          buttonLoginColor: "purple",
          buttonBackground: "purple",
          buttonColor: "white",
        });
      } else if (
        animationHowItWorks.currentImageIndex === 1 &&
        howItWorksCoords.top <= headerCoords.bottom &&
        howItWorksCoords.bottom >= headerCoords.bottom
      ) {
        // setMainHeaderZindex('zIndex')
        setColor({
          headerBackground: "pink",
          logoColor: "black",
          buttonLoginColor: "purple",
          buttonBackground: "purple",
          buttonColor: "white",
        });
      } else if (
        animationHowItWorks.currentImageIndex === 2 &&
        howItWorksCoords.top <= headerCoords.bottom &&
        howItWorksCoords.bottom >= headerCoords.bottom
      ) {
        // setMainHeaderZindex('zIndex')
        setColor({
          headerBackground: "lilac",
          logoColor: "black",
          buttonLoginColor: "purple",
          buttonBackground: "purple",
          buttonColor: "white",
        });
      } else if (
        animationHowItWorks.currentImageIndex === 3 &&
        howItWorksCoords.top <= headerCoords.bottom &&
        howItWorksCoords.bottom >= headerCoords.bottom
      ) {
        // setMainHeaderZindex('zIndex')
        setColor({
          headerBackground: "pink",
          logoColor: "black",
          buttonLoginColor: "purple",
          buttonBackground: "purple",
          buttonColor: "white",
        });
      } else if (
        animationHowItWorks.currentImageIndex === 4 &&
        howItWorksCoords.top <= headerCoords.bottom &&
        howItWorksCoords.bottom >= headerCoords.bottom
      ) {
        // setMainHeaderZindex('zIndex')
        setColor({
          headerBackground: "lilac",
          logoColor: "black",
          buttonLoginColor: "purple",
          buttonBackground: "purple",
          buttonColor: "white",
        });
      }
    };

    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  useEffect(() => {
    const header = document.getElementById("header");
    const headerCoords = header.getBoundingClientRect();
    const howItWorks = document.getElementById("how-it-works");
    const howItWorksCoords = howItWorks.getBoundingClientRect();
    if (
      animationHowItWorks.currentImageIndex === 0 &&
      howItWorksCoords.top <= headerCoords.bottom &&
      howItWorksCoords.bottom >= headerCoords.bottom
    ) {
      setColor({
        headerBackground: "lilac",
        logoColor: "black",
        buttonLoginColor: "purple",
        buttonBackground: "purple",
        buttonColor: "white",
      });
    } else if (
      animationHowItWorks.currentImageIndex === 1 &&
      howItWorksCoords.top <= headerCoords.bottom &&
      howItWorksCoords.bottom >= headerCoords.bottom
    ) {
      setColor({
        headerBackground: "pink",
        logoColor: "black",
        buttonLoginColor: "purple",
        buttonBackground: "purple",
        buttonColor: "white",
      });
    } else if (
      animationHowItWorks.currentImageIndex === 2 &&
      howItWorksCoords.top <= headerCoords.bottom &&
      howItWorksCoords.bottom >= headerCoords.bottom
    ) {
      setColor({
        headerBackground: "lilac",
        logoColor: "black",
        buttonLoginColor: "purple",
        buttonBackground: "purple",
        buttonColor: "white",
      });
    } else if (
      animationHowItWorks.currentImageIndex === 3 &&
      howItWorksCoords.top <= headerCoords.bottom &&
      howItWorksCoords.bottom >= headerCoords.bottom
    ) {
      setColor({
        headerBackground: "pink",
        logoColor: "black",
        buttonLoginColor: "purple",
        buttonBackground: "purple",
        buttonColor: "white",
      });
    } else if (
      animationHowItWorks.currentImageIndex === 4 &&
      howItWorksCoords.top <= headerCoords.bottom &&
      howItWorksCoords.bottom >= headerCoords.bottom
    ) {
      setColor({
        headerBackground: "lilac",
        logoColor: "black",
        buttonLoginColor: "purple",
        buttonBackground: "purple",
        buttonColor: "white",
      });
    }
  }, [animationHowItWorks.currentImageIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      const images = [
        "pink",
        "secondPurple",
        "secondPink",
        "thirdPurple",
        "purple",
      ];
      // eslint-disable-next-line default-case
      switch (animationHowItWorks.currentImageIndex) {
        case 0: // pink
          setStylesHowitWorks({
            fontWeighPink: "bold",
            fontWeighLilac: "normal",
            fontWeighSecondPink: "normal",
            fontWeighSecondLilac: "normal",
            fontWeighThirdLilac: "normal",
            background: "pink",
            text: "Разместите QR коды в местах, с которых, начинается проверка",
          });
          break;
        case 1:
          setStylesHowitWorks({
            fontWeighPink: "normal",
            fontWeighLilac: "bold",
            fontWeighSecondPink: "normal",
            fontWeighSecondLilac: "normal",
            fontWeighThirdLilac: "normal",
            background: "lilac",
            text: "Сотрудник сканирует QR код и открывает, чек-лист",
          });
          break;
        case 2:
          setStylesHowitWorks({
            fontWeighPink: "normal",
            fontWeighLilac: "normal",
            fontWeighSecondPink: "bold",
            fontWeighSecondLilac: "normal",
            fontWeighThirdLilac: "normal",
            background: "pink",
            text: "Сотрудник выполняет все действия по чек-листу и отмечает все пункты",
          });
          break;
        case 3:
          setStylesHowitWorks({
            fontWeighPink: "normal",
            fontWeighLilac: "normal",
            fontWeighSecondPink: "normal",
            fontWeighSecondLilac: "bold",
            fontWeighThirdLilac: "normal",
            background: "lilac",
            text: "Формируется отчет о проверке",
          });
          break;
        case 4:
          setStylesHowitWorks({
            fontWeighPink: "normal",
            fontWeighLilac: "normal",
            fontWeighSecondPink: "normal",
            fontWeighSecondLilac: "normal",
            fontWeighThirdLilac: "bold",
            background: "lilac",
            text: "Создание чек-листа с присвоением QR-кода",
          });
          break;
      }

      const currentImageName = images[animationHowItWorks.currentImageIndex++];
      if (animationHowItWorks.currentImageIndex >= images.length) {
        animationHowItWorks.currentImageIndex = 0;
      }
      setAnimationHowItWorks({
        ...animationHowItWorks,
        howItWorksImage: currentImageName,
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={s.app}>
        <div className={s.app__background}>
          <Header
            colorHeader={color.headerBackground}
            logoColor={color.logoColor}
            buttonLoginColor={color.buttonLoginColor}
            buttonBackground={color.buttonBackground}
          />
          <AuditorInfo display={animationInfo.auditorInfoDisplay} />
          <ScrollAnimation animation={animationInfo.animationStart} />
          <AboutProfit background={animationInfo.backgroundAboutProfit}/>
          <HowItWorks
            backgroundImage={animationHowItWorks.howItWorksImage}
            background={stylesHowitWorks.background}
            fontBold={stylesHowitWorks}
            text={stylesHowitWorks.text}
          />
          <Prices />
          <Reviews />
          <Questions />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
