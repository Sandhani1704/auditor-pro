import React from 'react'

import './button.css'

function Button({ text, size, color }) {
  return <button className={`${'button'} ${`button_${size}`} ${`button_${color}`}`}>{text}</button>
}

export default Button
