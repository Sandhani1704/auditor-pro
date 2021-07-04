import React from 'react'

import s from './questions.module.scss'
import Button from '../button/button'

function Questions() {
  return (
    <section className={s.questions}>
      <div className={s['questions__main-container']}>
        <p className={s.questions__title}>Остались вопросы?</p>
        <div className={s.questions__container}>
          <form className={s['questions__input-container']}>
            <input className={s.questions__input} placeholder='Телефон' type='tel' pattern='2[0-9]{3}-[0-9]{3}' />
            <Button text='Заказать консультацию' size='big' type='submit' />
            <div className={s['questions__image-arm']} />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Questions
