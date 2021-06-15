import React from 'react'

import './footer.css'

function Footer() {
  return (
    <section className='footer'>
      <div className='footer__social-icons'>
        <p className='footer__logo'>PA Group</p>
        <div className='footer__icons-container'>
          <div className='footer__facebook-icon' />
          <div className='footer__vk-icon' />
          <div className='footer__classmates-icon' />
        </div>
      </div>
      <div className='footer__contacts-container'>
        <p className='footer__phone'>+7 (921) 710-09-05</p>
        <p className='footer__email'>pavel.antipov39@mail.ru</p>
      </div>
    </section>
  )

}
export default Footer
