import {addDecorator, addParameters} from '@storybook/react'
import {withContexts} from '@storybook/addon-contexts/react'
import {contexts} from './contexts'

addParameters({
  backgrounds: [
    {
      name: 'Default theme',
      value: '#ffffff',
      default: true,
    },
    {name: 'Dark theme', value: '#050449'},
  ],
})

// noinspection JSCheckFunctionSignatures
addDecorator(withContexts(contexts))
