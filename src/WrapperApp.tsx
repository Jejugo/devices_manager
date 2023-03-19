import React from 'react'
import App from './App'
import DarkModeProvider from './providers/DarkModeProvider/DarkModeProvider'

export default function WrapperApp() {
  return (
    <DarkModeProvider><App /></DarkModeProvider>
  )
}
