import React from 'react'
import styles from './Button.module.css'
import cn from 'classnames'

import { IButtonProps } from './Button.props'
import Icon from '../Icon/Icon'
export const Button: React.FC<IButtonProps> = ({
  appearance,
  children,
  arrow = 'none',
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      })}
    >
      {children}
      {arrow !== 'none' && (
        <Icon
          name='arrow'
          className={cn(styles.arrow, {
            [styles.down]: arrow === 'down',
          })}
        />
      )}
    </button>
  )
}
