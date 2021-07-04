import React from 'react'

import s from './logo.module.scss'

function Logo({ logoColor }) {
  return <div className={`${s.logo} ${s[`logo_${logoColor}`]}`}>AuditorPRO</div>
}

export default Logo
