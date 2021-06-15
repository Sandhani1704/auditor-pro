import React from 'react'

import './how-it-works.css'

function HowItWorks() {
  return (
    <section className='how-it-works'>
      <h3 className='how-it-works__title-tablet'>Как это работает</h3>
      <div className='how-it-works__illustrations' />
      <h5 className='how-it-works__subtitle-tablet'>Создание чек-листа с присвоением QR-кода</h5>
      <div className='how-it-works__text-container'>
        <h3 className='how-it-works__title'>Как это работает</h3>
        <h5 className='how-it-works__subtitle'>Создание чек-листа с присвоением QR-кода</h5>
        <p className='how-it-works__paragraph-text'>
          Разместите QR коды в местах, с которых
          <br />
          начинается проверка
        </p>
        <p className='how-it-works__paragraph-text'>
          Сотрудник сканирует QR код и открывает
          <br />
          чек-лист
        </p>
        <p className='how-it-works__paragraph-text'>
          Сотрудник выполняет все действия по чек-листу
          <br />и отмечает все пункты
        </p>
        <p className='how-it-works__paragraph-text'>Формируется отчет о проверке</p>
      </div>
    </section>
  )
}

export default HowItWorks
