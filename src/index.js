import React from 'react'
import {createRoot} from 'react-dom/client'
import {GlobalStyle} from './utils'
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from './components/Buttons'

const App = () => (
  <div>
    <PrimaryButton>Primary</PrimaryButton>
    <SecondaryButton>Secondary</SecondaryButton>
    <TertiaryButton>Tertiary</TertiaryButton>
    <p></p>
    <PrimaryButton disabled>Primary</PrimaryButton>
    <SecondaryButton disabled>Secondary</SecondaryButton>
    <TertiaryButton disabled>Tertiary</TertiaryButton>
    <GlobalStyle />
  </div>
)

const container = document.querySelector('#root')
const root = createRoot(container)
root.render(<App />)
