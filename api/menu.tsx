import { API } from '@/api'
import { IMenuItem } from '@/interface/menu.interface'

export async function getMenu(firstCategory: number): Promise<IMenuItem[]> {
  const response = await fetch(API.topPage.find, {
    method: 'post',
    body: JSON.stringify({ firstCategory }),
    headers: new Headers({ 'content-type': 'application/json' }),
  })
  return response.json()
}
