import { BrowserRouter } from "react-router"
import { ThemeProvider } from "styled-components"

import { CoffeesContextProvider } from "./contexts/CoffeesContextProvider"

import { Router } from "./components/Router"

import { defaultTheme } from "./styles/defaultTheme"
import { GlobalStyles } from "./styles/global"

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesContextProvider>
          <Router />
        </CoffeesContextProvider>
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  )
}
