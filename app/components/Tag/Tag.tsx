import React from 'react'
import { ITAg } from './Tag.props'
import cn from 'classnames'
import styles from './Tag.module.css'

export const Tag: React.FC<ITAg> = ({
  size,
  children,
  color = 'ghost',
  href,
  className,
  ...props
}) => {
  return (
    <div {...props} className={cn(styles.tag, styles[size], styles[color], className)}>
      {href ? <a href={href}>{children}</a> : children}
    </div>
  )
}
