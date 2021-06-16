import React from 'react'

import './logo.css'

function Logo({color}) {
  return <div className={`logo ${`logo_${color}`}`} >AuditorPRO</div>
  // return <div className='logo' >AuditorPRO</div>
}

export default Logo
