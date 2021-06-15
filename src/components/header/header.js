import React from 'react'
import Logo from '../logo/logo'
import Button from '../button/button'
import ButtonLogin from '../button-login/button-login'

import './header.css'

function Header() {
  return (
    <div className='header'>
      <Logo />
      <div className='header__button-container'>
        <ButtonLogin />
        <Button text='Начать бесплатно' size='standart' />
      </div>
    </div>
  )
}

export default Header
