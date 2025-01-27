import { API } from '@/api'
import { notFound } from 'next/navigation'

interface IProductItem {
  title: string
}

export async function getPage(alias: string): Promise<IProductItem | null> {
  const response = await fetch(API.topPage.byAlias + alias)
  if (!response.ok) {
    return null
  }

  return await response.json()
}
