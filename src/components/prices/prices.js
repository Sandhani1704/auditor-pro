import React from 'react'

import './prices.css'
import PriceCard from '../price-card/price-card'

function Prices() {
  return (
    <section className='prices'>
      <div className='prices__corporate-container'>
    <h2 className='prices__title'> Корпоративные тарифы</h2 >
        <p className='prices__caption'>с внедрением чек-листов под ключ</p>
        <div className='prices__container'>
          <PriceCard
            title='STANDART'
            price='22 800'
            diskSpace='50 Gb'
            NumberOfResponses='до 20 000'
            headerСolor='standart'
            NumberOfСhecklists='5 чек-листов'
            backGround='standart'
            checkLists='visible'
          />

          <PriceCard
            title='PREMIUM'
            price='117 600'
            diskSpace='400 Gb'
            NumberOfResponses='Безлимит'
            headerСolor='premium'
            NumberOfСhecklists='35 чек-листов'
            backGround='premium'
            checkLists='visible'
          />
        </div>
      </div >
    <div className='prices__individuals-container'>
      <h2 className='prices__title prices__title_individuals'>Тарифы для физических лиц</h2>
      <div className='prices__container prices__container_individuals'>
        <PriceCard
          title='FREE'
          price='0'
          diskSpace='50 Gb'
          NumberOfResponses='100'
          headerСolor='free'
          backGround='free'
          checkLists='none'
        />

        <PriceCard
          title='STANDART'
          price='1 400'
          diskSpace='50 Gb'
          NumberOfResponses='20 000'
          headerСolor='standart'
          checkLists='none'
          backGround='standart'
        />

        <PriceCard
          title='PREMIUM'
          price='4 600'
          diskSpace='400 Gb'
          NumberOfResponses='50 000'
          headerСolor='premium'
          checkLists='none'
          backGround='premium'
        />
      </div>
      <div className='prices__container prices__container_wrap'>
        <PriceCard
          title='STANDART'
          price='1 400'
          diskSpace='50 Gb'
          NumberOfResponses='20 000'
          headerСolor='standart'
          checkLists='none'
          backGround='standart'
        />

        <PriceCard
          title='PREMIUM'
          price='4 600'
          diskSpace='400 Gb'
          NumberOfResponses='50 000'
          headerСolor='premium'
          checkLists='none'
          backGround='premium'
        />
        <PriceCard
          title='FREE'
          price='0'
          diskSpace='50 Gb'
          NumberOfResponses='100'
          headerСolor='free'
          checkLists='none'
          backGround='free'
        />
      </div>
    </div>
    </section >
  )
}

export default Prices
