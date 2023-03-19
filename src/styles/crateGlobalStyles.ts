import { createGlobalStyle } from 'styled-components'
import { ThemeProps } from './themes'

export const GlobalStyles = createGlobalStyle`
  body{
    background-color: ${(props: ThemeProps) => props.theme.backgroundColor};
    color: ${(props: ThemeProps) => props.theme.color};
  }
`