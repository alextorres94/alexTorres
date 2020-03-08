import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('should see the title', () => {
  const { getByText } = render(<App />)

  const title = getByText('Hello, I\'m Alex Torres')
  const wave = getByText('👋')

  expect(title).toBeInTheDocument()
  expect(wave).toBeInTheDocument()
})

test('should see the description', () => {
  const { getByText } = render(<App />)

  const description = getByText('Lifelong Learner | Clean Coder | Team Player')

  expect(description).toBeInTheDocument()
})

test('should see the social media', () => {
  const { getByLabelText } = render(<App />)

  const github = getByLabelText('github link')
  const twitter = getByLabelText('twitter link')
  const linkedin = getByLabelText('linkedin link')

  expect(github).toBeInTheDocument()
  expect(twitter).toBeInTheDocument()
  expect(linkedin).toBeInTheDocument()
})
