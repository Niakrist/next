import React from 'react'
import Arrow from './Icons/Arrow'
import StarIcon from './Icons/StarIcon'

interface iIconProps extends React.SVGProps<SVGSVGElement> {
  className: string
  name: 'arrow' | 'starIcon'
}

type TIcon = { [K in iIconProps['name']]: React.ReactElement<React.SVGProps<SVGSVGElement>> }

//[K in iIconProps['name']]: React.ReactElement<React.SVGProps<SVGSVGElement>>

const Icon: React.FC<iIconProps> = ({ className, name, ...props }) => {
  const icons: TIcon = {
    arrow: <Arrow className={className} {...props} />,
    starIcon: <StarIcon className={className} {...props} />,
  }
  return icons[name]
}

export default Icon
