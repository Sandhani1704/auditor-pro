import React from 'react'
import Button from '../button/button'

import './auditor-info.css'

function AuditorInfo() {
  return (
    <section className='auditorInfo'>
      <div className='auditorInfo__text-container'>
        <p className='auditorInfo__subtitle'>Путь, который приносит деньги</p>
        <h1 className='auditorInfo__title'>Онлайн сервис по созданию чек-листов</h1>
        <p className='auditorInfo__text'>Создаст качественный сервис - ваше устойчивое конкурентное преимущество</p>
        <Button text='Заказать консультацию' />
      </div>
      <div className='auditorInfo__animation' />
    </section>
  )
}

export default AuditorInfo
