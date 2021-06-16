import React, { useState, useEffect } from 'react'
import './about-profit.css'

function AboutProfit() {
  const aboutProfit = React.useRef();
  // const [profit, setProfit] = useState('about-profit')
  

  return (
    // <section className={profit} ref={aboutProfit} >
    <section className='about-profit' ref={aboutProfit} >
      <div className='about-profit__main-container'>
        <div className='about-profit__main-text-container'>
          <h1 className='about-profit__title'>Что вам даст AuditorPRO</h1>
          <div className='about-profit__text-container'>
            <div className='about-profit__paragraph-container'>
              <h3 className='about-profit__paragraph-title'>Оптимизация работы</h3>
              <p className='about-profit__paragraph-text'>
                С чек-листами не нужно
                <br />
                вспоминать, что и когда делать, <br />
                а можно сосредоточиться
                <br />
                на самой работе
              </p>

              <p className='about-profit__paragraph-text_small'>
                С чек-листами не нужно <br />
                вспоминать, что и когда <br />
                делать, а можно на самой
                <br />
                работе сосредоточиться
              </p>
            </div>

            <div className='about-profit__paragraph-container'>
              <h3 className='about-profit__paragraph-title'>Экономия времени</h3>
              <p className='about-profit__paragraph-text'>
                Составленный чек-лист будет <br /> служить долго и больше <br /> не нужно каждый раз тратить
                <br /> время на планирование работы
              </p>
              <p className='about-profit__paragraph-text_small'>
                Составленный чек-лист <br />
                будет служить долго и <br />
                больше не нужно каждый
                <br />
                раз тратить время <br />
                на планирование работы
              </p>
            </div>

            <div className='about-profit__paragraph-container'>
              <h3 className='about-profit__paragraph-title'>Быстрое обучение новых сотрудников</h3>
              <p className='about-profit__paragraph-text'>
                Благодаря составленному <br /> чек-листу у сотрудника будет
                <br /> структурированная информация
                <br /> о рабочем процессе
              </p>
              <p className='about-profit__paragraph-text_small'>
                Благодаря составленному <br />
                чек-листу у сотрудника <br />
                будет структурированная
                <br />
                информация о рабочем <br />
                процессе
              </p>
            </div>

            <div className='about-profit__paragraph-container'>
              <h3 className='about-profit__paragraph-title about-profit__paragraph-title_high'>
                Сокращение числа ошибок
              </h3>
              <p className='about-profit__paragraph-text'>
                Допущенные во время работы <br />
                промахи можно добавить <br />в чек-лист и больше <br /> их не повторять
              </p>
              <p className='about-profit__paragraph-text_small'>
                Допущенные во время <br />
                работы промахи можно <br />
                добавить в чек-лист и
                <br />
                больше их не повторять
              </p>
            </div>
          </div>
        </div>
        <div className='about-profit__animation-advantage' />
      </div>
    </section>
  )
}

export default AboutProfit
