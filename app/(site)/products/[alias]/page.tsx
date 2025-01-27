import { getPage } from '@/api/page'
import { notFound } from 'next/navigation'

export default async function Products({ params }: { params: { alias: string } }) {
  const { alias } = await params
  const productItem = await getPage(alias)
  if (!productItem) {
    notFound()
  }
  return <div>Products {productItem?.title} </div>
}
