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
  /** Состояние второго блока (показан или нет)
   * Меняется на true после окончания анимации "выдвижения второго блока"
   * */
  const [secondBlockIsVisible, setSecondBLockIsVisible] = useState(false);
  
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

  /** Стили для хедера на блоке howItWorks */
  const howItWorksAnimation = (index) => {
    // eslint-disable-next-line default-case
    switch (index) {
      case 0:
        return {
          headerBackground: "lilac",
          logoColor: "black",
          buttonLoginColor: "purple",
          buttonBackground: "purple",
          buttonColor: "white",
        };
      case 1:
        return {
          headerBackground: "pink",
          logoColor: "black",
          buttonLoginColor: "purple",
          buttonBackground: "purple",
          buttonColor: "white",
        };
      case 2:
        return {
          headerBackground: "lilac",
          logoColor: "black",
          buttonLoginColor: "purple",
          buttonBackground: "purple",
          buttonColor: "white",
        };
      case 3:
        return {
          headerBackground: "pink",
          logoColor: "black",
          buttonLoginColor: "purple",
          buttonBackground: "purple",
          buttonColor: "white",
        };
      case 4:
        return {
          headerBackground: "lilac",
          logoColor: "black",
          buttonLoginColor: "purple",
          buttonBackground: "purple",
          buttonColor: "white",
        };
    }
  };

  useEffect(() => {
    const listenScrollEvent = () => {
      /** Позиция скролла относительно страницы
       * Если больше нуля - триггерим анимацию появления второго блока
       * Если равно нулю - триггерим анимацию исчезновения второго блока
       * */
      const scrollPosition = window.pageYOffset;

      const header = document.getElementById("header");
      const headerCoords = header.getBoundingClientRect();
      const prices = document.getElementById("prices");
      const pricesCoords = prices.getBoundingClientRect();
      const aboutProfit = document.getElementById("about-profit");
      const aboutProfitCoords = aboutProfit.getBoundingClientRect();
      const auditorInfo = document.getElementById("auditor-info");
      const auditorInfoCoords = auditorInfo.getBoundingClientRect();
      const howItWorks = document.getElementById("how-it-works");
      const howItWorksCoords = howItWorks.getBoundingClientRect();

      /** Получает координаты блока и вощвращает булевое (true/false), если пора менять цвет хедера */
      const isShouldChangeHeaderColor = (blockCoordinates) => {
        /** Суть такова: если блок вышел хотя бы на 1 пиксель за верхнюю границу страницы
         * ИЛИ
         * Если нижняя граница блока выехала хотя бы на 1 пиксель больше, чем высота хедера (по нижней границе)
         * */
        return (
          blockCoordinates.top - headerCoords.height < 0 &&
          blockCoordinates.top + blockCoordinates.height > headerCoords.height
        );
      };

      if (
        scrollPosition > 0 &&
        !secondBlockIsVisible &&
        isShouldChangeHeaderColor(auditorInfoCoords)
      ) {
        console.log("запускается анимация появления второго блока");
        setSecondBLockIsVisible(true);
        setAnimationInfo({
          animationStart: "start",
          auditorInfoDisplay: "hide",
          backgroundAboutProfit: "background",
        });
      }
      if (scrollPosition === 0) {
        console.log("Запускается анимация исчезновения второго блока");
        setSecondBLockIsVisible(false);
        setAnimationInfo({
          animationStart: "hide",
          auditorInfoDisplay: "start",
          backgroundAboutProfit: "background",
        });
        setColor({
          headerBackground: "", // darkPurple
          logoColor: "white",
          buttonLoginColor: "purple",
          buttonBackground: "purple",
          buttonColor: "white",
        });
      }

      /** Третий блок */
      if (isShouldChangeHeaderColor(aboutProfitCoords)) {
        setColor({
          headerBackground: "darkPurple", // darkPurple
          logoColor: "white",
          buttonLoginColor: "purple",
          buttonBackground: "purple",
          buttonColor: "white",
        });
      }

      /** Слайдер */
      if (isShouldChangeHeaderColor(howItWorksCoords)) {
        setColor(howItWorksAnimation(animationHowItWorks.currentImageIndex));
      }

      /** Стоимость */
      if (isShouldChangeHeaderColor(pricesCoords)) {
        setColor({
          headerBackground: "white",
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

  // смена цвета хедера при анимации первого экрана
  useEffect(() => {
    if (secondBlockIsVisible) {
      const animation = () => {
        setColor({
          headerBackground: "purple",
          logoColor: "white",
          buttonLoginColor: "white",
          buttonBackground: "backgroundWhite",
          buttonColor: "purple",
        });
      };
      window.addEventListener("animationend", animation); // animationend
      return () => window.removeEventListener("animationend", animation);
    }
  }, [secondBlockIsVisible]);

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

  // смена хедера в блоке howItWorks без скролла
  useEffect(() => {
    const header = document.getElementById("header");
    const headerCoords = header.getBoundingClientRect();
    const howItWorks = document.getElementById("how-it-works");
    const howItWorksCoords = howItWorks.getBoundingClientRect();

    const isShouldChangeHeaderColor = (blockCoordinates) => {
      return (
        blockCoordinates.top - headerCoords.height < 0 &&
        blockCoordinates.top + blockCoordinates.height > headerCoords.height
      );
    };
    if (
      animationHowItWorks.currentImageIndex === 0 &&
      isShouldChangeHeaderColor(howItWorksCoords)
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
      isShouldChangeHeaderColor(howItWorksCoords)
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
      isShouldChangeHeaderColor(howItWorksCoords)
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
      isShouldChangeHeaderColor(howItWorksCoords)
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
      isShouldChangeHeaderColor(howItWorksCoords)
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
          <AboutProfit background={animationInfo.backgroundAboutProfit} />
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
