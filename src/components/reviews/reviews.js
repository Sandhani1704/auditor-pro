import React from 'react'

import './reviews.css'
import { NextIcon } from '../next-icon/next-icon'
import { BackIcon } from '../back-icon/back-icon'

function Reviews() {
  return (
    <section className='reviews'>
      <div className='reviews__background'>
        <div className='reviews__photo' />
        <p className='reviews__text'>“Благодаря AuditorPRO мы ..................”</p>
        <div className='reviews__caption-container'>
          <p className='reviews__caption-name'>Николай Ветров</p>
          <p className='reviews__caption-profession'>Менеджер Britannica Project </p>
        </div>
        <BackIcon iconColor='#DADADA' />
        <NextIcon iconColor='#8550F2' />
      </div>
    </section>
  )
  }

export default Reviews
