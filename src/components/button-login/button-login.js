import React from 'react'

import './button-login.css'

function ButtonLogin({ text = 'Вход', color }) {
  return <button className={`${'button-login'} ${`button-login_${color}`}`}>{text}</button>
}

export default ButtonLogin
