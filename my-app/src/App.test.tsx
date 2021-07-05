import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('Deve renderizar Short Link na tela', () => {
  render(<App />)
  const titleElement = screen.getByText(/Short Link/)
  expect(titleElement).toBeInTheDocument()
})
