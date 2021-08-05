import { ThemeProvider, DefaultTheme } from 'styled-components'

import './App.css'
import dark from './styles/themes/dark'
import Card from './components/Card'
import light from './styles/themes/light'
import Header from './components/Header'
import GlobalStyle from './styles/global'
import usePersistedState from './utils/usePersistedState'

function App() {
  /**
   * Use state theme.
   */
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  /**
   * Function to set theme.
   */
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  /**
   * JSX.
   */
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Card />
      </div>
    </ThemeProvider>
  )
}

export default App
