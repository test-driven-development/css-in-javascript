import React, {useState} from 'react'
import {createRoot} from 'react-dom/client'
import {ThemeProvider} from 'styled-components'

import {GlobalStyle, darkTheme, defaultTheme} from './utils'
import {PrimaryButton, SecondaryButton, TertiaryButton} from './components'
import {SignUpModal} from './components'

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

      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: '100vw',
          height: '90vh',
        }}
      >
        <p>normal</p>
        <PrimaryButton>Primary</PrimaryButton>
        <SecondaryButton>Secondary</SecondaryButton>
        <TertiaryButton>Tertiary</TertiaryButton>

        <p>small medium large</p>
        <PrimaryButton modifiers={['small']}>Primary</PrimaryButton>
        <SecondaryButton>Secondary</SecondaryButton>
        <TertiaryButton modifiers="large">Tertiary</TertiaryButton>

        <p>disabled</p>
        <PrimaryButton disabled>Primary</PrimaryButton>
        <SecondaryButton disabled>Secondary</SecondaryButton>
        <TertiaryButton disabled>Tertiary</TertiaryButton>

        <p>success, warning, error</p>
        <PrimaryButton modifiers={['success', 'primaryButtonSuccess']}>
          Primary
        </PrimaryButton>
        <SecondaryButton modifiers={['warning', 'secondaryButtonWarning']}>
          Secondary
        </SecondaryButton>
        <TertiaryButton modifiers={['error', 'tertiaryButtonError']}>
          Tertiary
        </TertiaryButton>

        <p>modal</p>
        <SignUpModal />
        <GlobalStyle />
      </div>
    </ThemeProvider>
  )
}

const container = document.querySelector('#root')
const root = createRoot(container)
root.render(<App />)
