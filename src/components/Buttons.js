import styled from 'styled-components'
import {applyStyleModifiers} from 'styled-components-modifiers'
import {typeScale, primaryFont} from '../utils'

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,
  primaryButtonWarning: ({theme}) => `
    background-color: ${theme.status.warningColor};
    color: ${theme.textColorInverted};
  `,
  secondaryButtonWarning: ({theme}) => `
    border: 2px solid ${theme.status.warningColor};
  `,
  error: ({theme}) => `
    background: none;
    color: ${theme.status.errorColor};
    &:hover, &:focus {
      background-color: ${theme.status.errorColorHover};
      outline: 3px solid ${theme.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${theme.status.errorColorActive};
    }
  `,
  primaryButtonError: ({theme}) => `
    background-color: ${theme.status.errorColor};
    color: ${theme.textColorInverted};
  `,
  secondaryButtonError: ({theme}) => `
    border: 2px solid ${theme.status.warningColor};
  `,
  success: ({theme}) => `
    background: none;
    color: ${theme.status.successColor};
    &:hover, &:focus {
      background-color: ${theme.status.successColorHover};
      outline: 3px solid ${theme.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${theme.status.successColorActive};
    }
  `,
  primaryButtonSuccess: ({theme}) => `
    background-color: ${theme.status.successColor};
    color: ${theme.textColorInverted};
  `,
  secondaryButtonSuccess: ({theme}) => `
    border: 2px solid ${theme.status.warningColor};
  `,
}

const Button = styled.button`
  padding: 8px 12px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${primaryFont};

  transition: background-color 0.2s linear, color 0.2s linear,
    border 0.2s linear;

  &:hover {
    background-color: ${props => props.theme.primaryHoverColor};
    color: ${props => props.theme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${props => props.theme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${props => props.theme.primaryActiveColor};
    border-color: ${props => props.theme.primaryActiveColor};
    color: ${props => props.theme.textColorOnPrimary};
  }

  &:disabled {
    cursor: not-allowed;
    background: none;
    color: ${props => props.theme.disabled};
    border: none;
  }
`
const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.textColorOnPrimary};
  border: 2px solid transparent;

  &:disabled {
    background-color: ${props => props.theme.disabled};
    color: ${props => props.theme.textOnDisabled};
    border-color: ${props => props.theme.disabled};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

const SecondaryButton = styled(Button)`
  border: 2px solid ${props => props.theme.primaryColor};
  color: ${props => props.theme.primaryColor};
  background-color: ${props => props.theme.textColorOnPrimary};

  &:disabled {
    border: 2px solid ${props => props.theme.disabled};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

const TertiaryButton = styled(Button)`
  border: 2px solid transparent;
  color: ${props => props.theme.primaryColor};
  background-color: ${props => props.theme.textColorOnPrimary};
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export {PrimaryButton, SecondaryButton, TertiaryButton}
