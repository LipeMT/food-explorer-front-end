import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { AuthProvider } from './hooks/auth'
import { RestaurantProvider } from './hooks/restaurant'

import { Routes } from './routes'

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

import GlobalStyles from './styles/global'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <RestaurantProvider>
          <Routes />
        </RestaurantProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
