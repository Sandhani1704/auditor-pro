import React from 'react'

import s from './priceCard.module.scss'

function PriceCard({
  title,
  price,
  diskSpace,
  NumberOfResponses,
  headerСolor,
  NumberOfСhecklists,
  checkLists,
  backGround,
}) {
  return (
    <div className={`${s.priceCard} ${s[`priceCard_${backGround}`]}`}>
      <div className={`${s.priceCard__header} ${s[`priceCard__header_${headerСolor}`]}`}>
        <p className={s['priceCard__card-title']}>{title}</p>
      </div>
      <p className={s['priceCard__card-price']}>
        {price} <span className={s['priceCard__card-price__span']}>₽</span>
      </p>
      <p className={s['priceCard__card-price_caption']}>в год</p>
      <ul className={s['priceCard__container-conditions']}>
        <li className={s.priceCard__conditionsItem}>
          <span className={s['priceCard__conditions-item__span']}>1 </span>пользователь
        </li>
        <li className={s.priceCard__conditionsItem}>
          <span className={s['priceCard__conditions-item__span']}>{diskSpace} </span>диск
        </li>
        <li className={s.priceCard__conditionsItem}>
          <span className={s['priceCard__conditions-item__span']}>{NumberOfResponses} </span>ответов в месяц
        </li>
        <li className={s[`priceCard__conditionsItem_${checkLists}`]}>
          <span className={s['prices__conditions-item__span']}>{NumberOfСhecklists} </span>поможем создать
        </li>
      </ul>
    </div>
  )
}

export default PriceCard
