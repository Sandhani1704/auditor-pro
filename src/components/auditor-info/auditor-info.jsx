import React from 'react'
import Button from '../button/button'

import s from './auditor-info.module.scss'

function AuditorInfo({ display }) {
  return (
    <section className={`${s.auditorInfo} ${s[`auditorInfo_${display}`]}`} id='auditor-info'>
      <div className={s.auditorInfo__container}>
        <div className={s['auditorInfo__text-container']}>
          <p className={s.auditorInfo__subtitle}>Путь, который приносит деньги</p>
          <h1 className={s.auditorInfo__title}>Онлайн сервис по созданию чек-листов</h1>
          <p className={s.auditorInfo__text}>Создаст качественный сервис - ваше устойчивое конкурентное преимущество</p>
          <Button text='Заказать консультацию' />
        </div>
        <div className={s.auditorInfo__animation} />
      </div>
    </section>
  )
}

export default AuditorInfo
