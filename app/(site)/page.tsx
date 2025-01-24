'use client'
import React, { useState } from 'react'
import { Rating } from '../components'
import styles from './page.module.css'

export default function Home(): React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> {
  const [rating, setRating] = useState(0)
  return (
    <main className={styles.main}>
      <Rating rating={rating} setRating={setRating} isEditable={true} />
    </main>
  )
}
