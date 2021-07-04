import React from 'react'

import s from './button.module.scss'

function Button({ text, size, buttonBackground, buttonColor, openRegistrationModal }) {
  return (
    <button
      className={`${s.button} ${s[`button_${size}`]} ${s[`button_${buttonBackground}`]} ${s[`button_${buttonColor}`]}`}
      onClick={openRegistrationModal}
    >
      {text}
    </button>
  )
}

export default Button
