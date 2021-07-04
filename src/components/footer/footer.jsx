import React from 'react'

import s from './footer.module.scss'

function Footer() {
  return (
    <section className={s.footer}>
      <div className={s.footer__container}>
        <div className={s['footer__social-icons']}>
          <p className={s.footer__logo}>PA Group</p>
          <div className={s['footer__icons-container']}>
            <div className={s['footer__facebook-icon']} />
            <div className={s['footer__vk-icon']} />
            <div className={s['footer__classmates-icon']} />
          </div>
        </div>
        <div className={s['footer__contacts-container']}>
          <p className={s.footer__phone}>+7 (921) 710-09-05</p>
          <p className={s.footer__email}>pavel.antipov39@mail.ru</p>
        </div>
      </div>
      <div className={s['footer__privacy-container']}>
        <p className={s['footer__privacy-caption']}>Политика конфиденциальности</p>
      </div>
    </section>
  )
}

export default Footer
