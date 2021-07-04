import React from 'react'
import Logo from '../logo/logo'
import Button from '../button/button'
import ButtonLogin from '../button-login/button-login'
import s from './header.module.scss'

function Header({ colorHeader, logoColor, buttonBackground, buttonLoginColor, openModal, zIndex }) {
  return (
    <div className={`${s.header} ${s[`header_${colorHeader}`]} ${s[`header_${zIndex}`]}`} id='header'>
      <div className={s.header__container}>
        <Logo logoColor={logoColor} />

        <div className={s['header__button-container']}>
          <ButtonLogin buttonLoginColor={buttonLoginColor} openLoginModal={() => openModal('authorizationModal')} />
          <Button
            text='Начать бесплатно'
            size='standart'
            openRegistrationModal={() => openModal('registerFirstStepModal')}
            buttonBackground={buttonBackground}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
