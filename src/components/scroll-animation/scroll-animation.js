import React from 'react'
import Logo from '../logo/logo'
import Button from '../button/button'
import ButtonLogin from '../button-login/button-login'

import './scroll-animation.css'
import '../header/header.css'

function ScrollAnimation() {
  return (
    <>
      <section className='scroll-animation wow animate__animated animate__fadeInUp'>
        <div className='header header_info'>
          <Logo />
          <div className='header__button-container'>
            <ButtonLogin color='color' />
            <Button text='Начать бесплатно' size='standart' color='color' />
          </div>
        </div>
        <div className='scroll-animation__container'>
          <h1 className='scroll-animation__title'>Онлайн сервис по созданию чек-листов</h1>

          <div className='scroll-animation__ellipse'>
            <p className='scroll-animation__text'>
              <span className='scroll-animation__textMark'>Чек-лист</span> это список действий, по которому
              осуществляется организация и контроль рабочего процесса
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ScrollAnimation
