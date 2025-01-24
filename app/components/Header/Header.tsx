import React from 'react'
import styles from './Header.module.css'
import { IHeaderProps } from './Header.props'

export const Header: React.FC<IHeaderProps> = ({ ...props }) => {
  return <header {...props}>header</header>
}
