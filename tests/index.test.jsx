import { render, screen } from '@testing-library/react'
import MyApp from '../pages/_app'
// import Home from '../pages/_app'

it('renders homepage unchanged', () => {
  const { container } = screen(<MyApp />)
  expect(container).toMatchSnapshot()
})