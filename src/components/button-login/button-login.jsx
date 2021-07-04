import React from 'react'

import s from './button-login.module.scss'

function ButtonLogin({ text = 'Вход', buttonLoginColor, openLoginModal }) {
  return (
    <button onClick={openLoginModal} className={`${s['button-login']} ${s[`button-login_${buttonLoginColor}`]}`}>
      {text}
    </button>
  )
}

export default ButtonLogin
