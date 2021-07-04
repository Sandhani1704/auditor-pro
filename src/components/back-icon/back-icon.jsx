import React from 'react'
import s from './back-icon.module.scss'

export const BackIcon = ({ iconColor }) => {
  return (
    <svg
      className={s['back-icon']}
      width='48'
      height='48'
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0)'>
        <circle cx='24' cy='24' r='24' fill='#F0F0F0' />
        <path
          d='M30 36L18 24L30 12'
          stroke={iconColor}
          strokeWidth='2.75'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect width='48' height='48' fill='white' transform='translate(48 48) rotate(-180)' />
        </clipPath>
      </defs>
    </svg>
  )
}
