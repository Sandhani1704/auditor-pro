import React from 'react'

import s from './about-profit.module.scss'

function AboutProfit({ background }) {
  return (
    <section className={`${s['about-profit']} ${s[`about-profit_${background}`]}`} id='about-profit'> 
      <div className={s['about-profit__main-container']}>
        <div className={s['about-profit__main-text-container']}>
          <h1 className={s['about-profit__title']}>Что вам даст AuditorPRO</h1>
          <div className={s['about-profit__text-container']}>
            <div className={s['about-profit__paragraph-container']}>
              <h3 className={s['about-profit__paragraph-title']}>Оптимизация работы</h3>
              <p className={s['about-profit__paragraph-text']}>
                С чек-листами не нужно
                <br />
                вспоминать, что и когда делать, <br />
                а можно сосредоточиться
                <br />
                на самой работе
              </p>

              <p className={s['about-profit__paragraph-text_small']}>
                С чек-листами не нужно <br />
                вспоминать, что и когда <br />
                делать, а можно на самой
                <br />
                работе сосредоточиться
              </p>
            </div>

            <div className={s['about-profit__paragraph-container']}>
              <h3 className={s['about-profit__paragraph-title']}>Экономия времени</h3>
              <p className={s['about-profit__paragraph-text']}>
                Составленный чек-лист будет <br /> служить долго и больше <br /> не нужно каждый раз тратить
                <br /> время на планирование работы
              </p>
              <p className={s['about-profit__paragraph-text_small']}>
                Составленный чек-лист <br />
                будет служить долго и <br />
                больше не нужно каждый
                <br />
                раз тратить время <br />
                на планирование работы
              </p>
            </div>

            <div className={s['about-profit__paragraph-container']}>
              <h3 className={s['about-profit__paragraph-title']}>Быстрое обучение новых сотрудников</h3>
              <p className={s['about-profit__paragraph-text']}>
                Благодаря составленному <br /> чек-листу у сотрудника будет
                <br /> структурированная информация
                <br /> о рабочем процессе
              </p>
              <p className={s['about-profit__paragraph-text_small']}>
                Благодаря составленному <br />
                чек-листу у сотрудника <br />
                будет структурированная
                <br />
                информация о рабочем <br />
                процессе
              </p>
            </div>

            <div className={s['about-profit__paragraph-container']}>
              <h3 className={`${s['about-profit__paragraph-title']} ${s['about-profit__paragraph-title_high']}`}>
                Сокращение числа ошибок
              </h3>
              <p className={s['about-profit__paragraph-text']}>
                Допущенные во время работы <br />
                промахи можно добавить <br />в чек-лист и больше <br /> их не повторять
              </p>
              <p className={s['about-profit__paragraph-text_small']}>
                Допущенные во время <br />
                работы промахи можно <br />
                добавить в чек-лист и
                <br />
                больше их не повторять
              </p>
            </div>
          </div>
        </div>
        <div className={s['about-profit__animation-advantage']} />
      </div>
    </section>
  )
}

export default AboutProfit
