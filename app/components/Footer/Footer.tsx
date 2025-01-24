import React from 'react'
import styles from './Footer.module.css'
import { iFooterProps } from './Footer.props'

export const Footer: React.FC<iFooterProps> = ({ ...props }) => {
  return <footer {...props}>footer</footer>
}
