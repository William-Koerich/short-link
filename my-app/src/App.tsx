import { useState, ChangeEvent } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import './App.css'
import api from './utils/api'
import dark from './styles/themes/dark'
import light from './styles/themes/light'
import Header from './components/Header'
import GlobalStyle from './styles/global'
import usePersistedState from './utils/usePersistedState'

function App() {
  /**
   * Use state link.
   */
  const [link, setLink] = useState<string>('')

  /**
   * Use state short link.
   */
  const [shortLink, setShortLink] = useState<string>('')

  /**
   * Use state theme.
   */
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  /**
   * Function to get link in input.
   */
  const changeEventInputLink = (event: ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value)
  }

  /**
   * Function to save link.
   */
  const saveLink = async () => {
    await api
      .post(`/link/`, { link })
      .then(res => setShortLink(res.data.shortLink))
  }

  /**
   * Function to redirect when button click.
   */
  const redirect = () => {
    return window.open(`${link}`)
  }

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
        <input
          type="url"
          placeholder="Cole seu link aqui"
          onChange={changeEventInputLink}
        />
        <button onClick={saveLink}>Aplicar</button>
        <button onClick={redirect}>Redirecionar</button>
        <div>{shortLink}</div>
      </div>
    </ThemeProvider>
  )
}

export default App
