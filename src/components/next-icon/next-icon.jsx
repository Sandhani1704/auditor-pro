import React from 'react'
import s from './next-icon.module.scss'

export const NextIcon = ({ iconColor }) => {
  return (
    <svg
      className={s['next-icon']}
      width='48'
      height='48'
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0)'>
        <circle cx='24' cy='24' r='24' transform='rotate(-180 24 24)' fill='#F0F0F0' />
        <path
          d='M18 12L30 24L18 36'
          stroke={iconColor}
          strokeWidth='2.75'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect width='48' height='48' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
