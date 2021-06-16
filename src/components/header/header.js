import React, { useState, useEffect } from 'react'
import Logo from '../logo/logo'
import Button from '../button/button'
import ButtonLogin from '../button-login/button-login'

import './header.css'

function Header({headerIsActive, colorHeader}) {
  

  return (
    // <div className={`header ${lightLilac && 'header_light-lilac'} ${white && 'header_white'}`} >
    <div className={`header ${`header_${colorHeader}`}`} >
      {/* <Logo /> */}
      {/* <div className={`header__logo ${`header__logo_${colorHeader}`}`}>AuditorPRO</div> */}
      {headerIsActive ? <Logo color='black' /> : <Logo />}
      <div className='header__button-container'>
        <ButtonLogin />
        <Button text='Начать бесплатно' size='standart' />
      </div>
    </div >
  )
}

export default Header
