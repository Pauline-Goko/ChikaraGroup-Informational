import { render, screen } from '@testing-library/react';
import React from 'react';
import About from './Components/About';
import Value from './Components/Values';
import Team from './Components/team';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders team section title', () => {
  render(<Team />);
  const titleElement = screen.getByText(/Meet the team/i);
  expect(titleElement).toBeInTheDocument();
})