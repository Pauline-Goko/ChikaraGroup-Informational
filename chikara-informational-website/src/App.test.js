import { render, screen } from '@testing-library/react';
import React from 'react';
import About from './Components/About';
import Value from './Components/Values';
import Team from './Components/team';

test('renders About component', () => {
  render(<About />);
  const contactElement = screen.getByText('About Us');
  expect(contactElement).toBeInTheDocument();
});
test('renders Values component', () => {
  render(<Value />);
  const contactElement = screen.getByText('Our Values');
  expect(contactElement).toBeInTheDocument();
});
test('renders team section title', () => {
  render(<Team />);
  const titleElement = screen.getByText(/Meet the team/i);
  expect(titleElement).toBeInTheDocument();
})