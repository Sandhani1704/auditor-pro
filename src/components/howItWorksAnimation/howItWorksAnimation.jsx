import React from 'react'

import s from './howItWorksAnimation.module.scss'

function HowItWorksAnimation({ background }) {
  return (
    <div className={`${s.howItWorksAnimation}`}>
      <div
        className={`${s['howItWorksAnimation__illustrations-background']} ${
          s[`howItWorksAnimation__illustrations-background_${background}`]
        }`}
        id='animation-background'
      />

      <div
        className={`${s['howItWorksAnimation__illustrations-image']} ${
          s[`howItWorksAnimation__illustrations-image_${background}`]
        }`}
        id='animation-image'
      />
    </div>
  )
}

export default HowItWorksAnimation
