import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Команда',
  description: 'Описание команды',
}

const Team: React.FC = () => {
  return <div style={{ border: '2px dotted green', padding: 10 }}>Team</div>
}

export default Team
