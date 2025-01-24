'use client'
import cn from 'classnames'
import React, { JSX, useEffect, useState } from 'react'
import Icon from '../Icon/Icon'
import styles from './Rating.module.css'
import { IRatingProps } from './Rating.props'

export const Rating: React.FC<IRatingProps> = ({
  rating = 3,
  setRating,
  className,
  isEditable = false,
  ...props
}) => {
  const [rattingArray, setRaitingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

  useEffect(() => {
    constructRating(rating)
  }, [rating])

  const fillStar = (rating: number): void => {
    if (!isEditable) return
    constructRating(rating)
  }

  const clickStar = (rating: number): void => {
    if (!isEditable) return
    setRating?.(rating)
  }

  const pressKey = (e: React.KeyboardEvent<SVGSVGElement>, code: string, rating: number): void => {
    if (!isEditable) return
    if (e.code === code) {
      setRating?.(rating)
    }
  }

  const constructRating = (currentRating: number): void => {
    const updateRating = rattingArray.map((r: JSX.Element, i: number) => {
      return (
        <Icon
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          name='starIcon'
          onMouseEnter={() => fillStar(i + 1)}
          onMouseLeave={() => fillStar(rating)}
          onClick={() => clickStar(i + 1)}
          tabIndex={isEditable ? 0 : -1}
          onKeyUp={(e: React.KeyboardEvent<SVGSVGElement>) => pressKey(e, 'Space', i + 1)}
        />
      )
    })
    setRaitingArray(updateRating)
  }

  return (
    <div {...props}>
      {rattingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  )
}
