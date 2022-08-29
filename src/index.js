import React, {useState} from 'react'
import {createRoot} from 'react-dom/client'
import {ThemeProvider} from 'styled-components'

import {GlobalStyle, darkTheme, defaultTheme} from './utils'
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from './components/Buttons'

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false)
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{margin: '0 16px 24px', padding: '8px', background: 'none'}}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark theme
      </button>

      <button
        style={{margin: '0 16px 24px', padding: '8px', background: 'none'}}
        onClick={() => setUseDarkTheme(false)}
      >
        Default theme
      </button>

    </ThemeProvider>
  )
}

const container = document.querySelector('#root')
const root = createRoot(container)
root.render(<App />)
