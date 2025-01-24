import React from 'react'
import { ISidebarProps } from './Sidebarprops'

export const Sidebar: React.FC<ISidebarProps> = ({ ...props }) => {
  return <div {...props}>Sidebar</div>
}
