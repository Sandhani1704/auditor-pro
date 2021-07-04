import React from 'react'

import s from './how-it-works.module.scss'
import HowItWorksAnimation from '../howItWorksAnimation/howItWorksAnimation'

function HowItWorks({ backgroundImage, background, fontBold, text }) {
  return (
    <section
      className={`${s['how-it-works']}
       ${s[`how-it-works_${background}`]}`}
      id='how-it-works'
    >
      <div className={s['how-it-works__container']}>
        <h3 className={s['how-it-works__title-tablet']}>Как это работает</h3>
        <HowItWorksAnimation background={backgroundImage} />

        <h5
          className={`${s['how-it-works__subtitle-tablet']}
      
       ${s['how-it-works__subtitle-tablet_bold']}`}
        >
          {text}
        </h5>

        <div className={s['how-it-works__text-container']}>
          <h3 className={s['how-it-works__title']}>Как это работает</h3>
          <h5
            className={`${s['how-it-works__subtitle']}
       ${s[`how-it-works__subtitle_${fontBold.fontWeighThirdLilac}`]}`}
          >
            Создание чек-листа с присвоением QR-кода
          </h5>
          <p
            className={`${s['how-it-works__paragraph-text']}
       ${s[`how-it-works__paragraph-text_${fontBold.fontWeighPink}`]}`}
          >
            Разместите QR коды в местах, с которых
            <br />
            начинается проверка
          </p>
          <p
            className={`${s['how-it-works__paragraph-text']}
       ${s[`how-it-works__paragraph-text_${fontBold.fontWeighLilac}`]}`}
          >
            Сотрудник сканирует QR код и открывает
            <br />
            чек-лист
          </p>
          <p
            className={`${s['how-it-works__paragraph-text']}
       ${s[`how-it-works__paragraph-text_${fontBold.fontWeighSecondPink}`]}`}
          >
            Сотрудник выполняет все действия по чек-листу
            <br />и отмечает все пункты
          </p>
          <p
            className={`${s['how-it-works__paragraph-text']}
       ${s[`how-it-works__paragraph-text_${fontBold.fontWeighSecondLilac}`]}`}
          >
            Формируется отчет о проверке
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
