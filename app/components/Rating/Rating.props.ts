export interface IRatingProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEditable?: boolean
  rating: number
  className?: string
  setRating?: (rating: number) => void
}
