import React, {useState} from 'react'
import {createRoot} from 'react-dom/client'
import {ThemeProvider} from 'styled-components'

import {GlobalStyle, darkTheme, defaultTheme} from './utils'
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from './components/Buttons'



const container = document.querySelector('#root')
const root = createRoot(container)
root.render(<App />)
