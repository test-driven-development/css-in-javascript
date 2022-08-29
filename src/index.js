import React, {useState} from 'react'
import {createRoot} from 'react-dom/client'
import {GlobalStyle} from './utils'
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from './components/Buttons'

const App = () => (
  <div>
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

    <GlobalStyle />
  </div>
)

const container = document.querySelector('#root')
const root = createRoot(container)
root.render(<App />)
