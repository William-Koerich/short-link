import React, { useState, ChangeEvent } from 'react'
import './App.css'
import api from './utils/api'

function App() {
  const [link, setLink] = useState<string>('')
  const [shortLink, setShortLink] = useState<string>('')

  const realLink = (event: ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value)
  }

  const saveLink = async () => {
    await api
      .post(`/link/`, { link: `'${link}'` })
      .then(res => setShortLink(res.data.shortLink))
  }

  const redirect = () => {
    return window.open(`${link}`)
  }

  return (
    <div className="App">
      <div className="title">Short Link</div>
      <input type="text" placeholder="Cole seu link aqui" onChange={realLink} />
      <button onClick={saveLink}>Aplicar</button>
      <button onClick={redirect}>Redirecionar</button>
      <div>{shortLink}</div>
    </div>
  )
}

export default App
