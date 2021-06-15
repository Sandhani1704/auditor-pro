import React from 'react'

import './questions.css'
import Button from '../button/button'

function Questions() {
  return (
    <section className='questions'>
      <p className='questions__title'>Остались вопросы?</p>
      <div className='questions__container'>
        <div className='questions__input-container'>
          <input className='questions__input' placeholder='Телефон' />
          <Button text='Заказать консультацию' size='big' />
          <div className='questions__image-arm' />
        </div>
      </div>
    </section>
  )
}

export default Questions
