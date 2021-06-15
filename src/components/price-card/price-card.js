import React from 'react'

import './priceCard.css'

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
    <div className={`${'priceCard'} ${`priceCard_${backGround}`}`}>
      <div className={`${'priceCard__header'} ${`priceCard__header_${headerСolor}`}`}>
        <p className='priceCard__card-title'>{title}</p>
      </div>
      <p className='priceCard__card-price'>
        {price} <span className='priceCard__card-price__span'>₽</span>
      </p>
      <p className='priceCard__card-price_caption'>в год</p>
      <ul className='priceCard__container-conditions'>
        <li className='priceCard__conditionsItem'>
          <span className='priceCard__conditions-item__span'>1 </span>пользователь
        </li>
        <li className='priceCard__conditionsItem'>
          <span className='priceCard__conditions-item__span'>{diskSpace} </span>диск
        </li>
        <li className='priceCard__conditionsItem'>
          <span className='priceCard__conditions-item__span'>{NumberOfResponses} </span>ответов в месяц
        </li>
        <li className={`${`priceCard__conditionsItem_${checkLists}`}`}>
          <span className='prices__conditions-item__span'>{NumberOfСhecklists} </span>поможем создать
        </li>
      </ul>
    </div>
  )
}

export default PriceCard
