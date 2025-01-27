import { getMenu } from '@/api/menu'
import React from 'react'
import styles from './page.module.css'

export default async function Home() {
  const menu = await getMenu(1)
  return <main className={styles.main}>Главная страница {menu.length}</main>
}
