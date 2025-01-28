import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { Home } from './pages/Home'
import { Details } from './pages/Details'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

import GlobalStyles from './styles/global'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Details />
    </ThemeProvider>
  </StrictMode>,
)
