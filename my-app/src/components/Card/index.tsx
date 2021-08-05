import React, { useState, ChangeEvent } from 'react'
import api from '../../utils/api'
import { Container, ContainerInput, Title } from './styles'

const Card = () => {
  /**
   * Use state link.
   */
  const [link, setLink] = useState<string>('')

  /**
   * Use state short link.
   */
  const [shortLink, setShortLink] = useState<string>('')

  /**
   * Function to get link in input.
   */
  const changeEventInputLink = (event: ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value)
  }

  /**
   * Function to redirect when button click.
   */
  const redirect = () => {
    return window.open(`${link}`)
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
   * JSX.
   */
  return (
    <Container>
      <ContainerInput>
        <Title>Curt Link</Title>
        <input
          type="url"
          placeholder="Put your url here..."
          onChange={changeEventInputLink}
          style={{
            width: '100%',
            margin: '20%',
            height: '50px',
            border: 'none',
            padding: '10px',
            outline: 'none',
            marginBottom: '30px',
            borderRadius: '50px',
            justifyContent: 'center'
          }}
        />
        <button
          onClick={saveLink}
          style={{
            width: '250px',
            outline: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '15px',
            borderRadius: '35px',
            background: 'transparent',
            margin: '20px 30px',
            height: '50px',
            border: '0.5px #fff solid',
            marginLeft: '100px'
          }}
        >
          Aplicar
        </button>
        <button
          onClick={redirect}
          style={{
            width: '250px',
            outline: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '15px',
            borderRadius: '35px',
            background: 'transparent',
            margin: '20px 30px',
            height: '50px',
            border: '0.5px #fff solid',
            marginLeft: '180px'
          }}
        >
          Redirecionar
        </button>
        <div
          style={{
            width: '100%',
            height: '150px',
            fontSize: '20px',
            marginTop: '5%',
            marginLeft: '22.5%'
          }}
        >
          {'localhost:7777/link/'}
          {shortLink}
        </div>
      </ContainerInput>
    </Container>
  )
}

export default Card
