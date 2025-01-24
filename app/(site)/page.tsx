'use client'
import React, { useState } from 'react'
import { Rating } from '../components'
import styles from './page.module.css'

export default function Home(): React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> {
  const [rating, setRating] = useState(0)

  console.log('env: ', process.env.NEXT_PUBLIC_DOMAIN)

  return (
    <main className={styles.main}>
      <nav>
        <ul className={styles.nav}>
          <li>Курсы</li>
          <li>Сервисы</li>
          <li>Книги</li>
          <li>Товары</li>
        </ul>
      </nav>
      <Rating rating={rating} setRating={setRating} isEditable={true} />
    </main>
  )
}
