import { render, screen } from '@testing-library/react';
import React from 'react';
import About from './Components/About';
import Value from './Components/Values';

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
