'use client'
import React from 'react'

const TestButton:React.FC = () => {
  return (
    <button onClick={() => console.log('click')}>
      click
    </button>
  )
}

export default TestButton
