import { ReactNode } from 'react'

export interface IPProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode
  size?: 'size14' | 'size16' | 'size18'
}
