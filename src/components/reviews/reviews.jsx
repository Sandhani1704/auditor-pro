import React, { useEffect } from 'react'

import s from './reviews.module.scss'
import { NextIcon } from '../next-icon/next-icon'
import { BackIcon } from '../back-icon/back-icon'
import * as reviews from './utils/reviews.json'

function Reviews() {
  const [reviewsData, setReviewsData] = React.useState([])
  const [displayReview, setDisplayReview] = React.useState([])
  const [nextButton, setNextButton] = React.useState(false)
  const [backButton, setBackButton] = React.useState(true)
  const [nextButtonColor, setNextButtonColor] = React.useState('#8550F2')
  const [backButtonColor, setBackButtonColor] = React.useState('#DADADA')

  const getInitialDatas = async () => {
    return await new Promise((resolve) => {
      setTimeout(() => resolve(reviews.response), 1000)
    })
  }

  useEffect(() => {
    getInitialDatas().then((res) => {
      if (res) {
        const initialDatas = Object.values(res)

        setReviewsData(initialDatas)
        setDisplayReview([initialDatas[0]])
      }
    })
  }, [])

  function handleShowButtonNext(item) {
    const indexCard = reviewsData.indexOf(item)
    const nextCardIndex = indexCard + 1
    setDisplayReview([reviewsData[nextCardIndex]])
    if (indexCard === reviewsData.length - 2) {
      setNextButton(true)
      setNextButtonColor('#DADADA')
    } else {
      setNextButton(false)
      setNextButtonColor('#8550F2')
    }
    if (reviewsData.indexOf(displayReview) === 0) {
      setBackButton(true)
      setBackButtonColor('#DADADA')
    } else {
      setBackButton(false)
      setBackButtonColor('#8550F2')
    }
  }

  function handleShowButtonBack(item) {
    const indexCard = reviewsData.indexOf(item)
    const previousCardIndex = indexCard - 1
    setDisplayReview([reviewsData[previousCardIndex]])

    if (previousCardIndex === 0) {
      setBackButton(true)
      setBackButtonColor('#DADADA')
    } else {
      setBackButton(false)
      setBackButtonColor('#8550F2')
    }
    if (reviewsData.indexOf(displayReview) === reviewsData.length - 1) {
      setNextButton(true)
      setNextButtonColor('#DADADA')
    } else {
      setNextButton(false)
      setNextButtonColor('#8550F2')
    }
  }

  return (
    <>
      <section className={s.reviews} id='reviews'>
        {displayReview.map((item) => (
          <div key={item.id} className={`${s.reviews__background} `}>
            <img
              src={item.authorPicture}
              className={`${s.reviews__photo}
            ${s[`reviews__photo_${item.backgroundPic}`]}`}
            />
            <p className={s.reviews__text}>{item.text}</p>
            <div className={s['reviews__caption-container']}>
              <p className={s['reviews__caption-name']}>{item.reviewsAuthor}</p>
              <p className={s['reviews__caption-profession']}>{item.authorProfession} </p>
            </div>

            <button className={s.reviews__backButton} onClick={() => handleShowButtonBack(item)} disabled={backButton}>
              <BackIcon iconColor={backButtonColor} />
            </button>

            <button className={s.reviews__nextButton} onClick={() => handleShowButtonNext(item)} disabled={nextButton}>
              <NextIcon iconColor={nextButtonColor} />
            </button>
          </div>
        ))}
      </section>
    </>
  )
}

export default Reviews
