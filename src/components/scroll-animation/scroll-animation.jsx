import React from 'react'
import s from './scroll-animation.module.scss'

function ScrollAnimation({ animation }) {
  // const heightPage = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  return (
    <section className={`${s.scrollAnimation} ${s[`scrollAnimation_${animation}`]}`} id='scroll-animation'>
      <div className={s.scrollAnimation__container} id='animation'>
        <h1 className={s.scrollAnimation__title}>Онлайн сервис по созданию чек-листов</h1>

        <div className={s.scrollAnimation__ellipse}>
          <p className={s.scrollAnimation__text}>
            <span className={s.scrollAnimation__textMark}>Чек-лист</span> это список
            <br /> действий, по которому
            <br /> осуществляется организация
            <br /> и контроль рабочего процесса
          </p>
        </div>
      </div>
    </section>
  )
}

export default ScrollAnimation
