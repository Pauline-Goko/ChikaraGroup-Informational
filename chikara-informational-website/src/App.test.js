import { render, screen } from '@testing-library/react';
import React from 'react';
import About from './Components/About';

test('renders About component', () => {
  render(<About />);
  const contactElement = screen.getByText('About Us');
  expect(contactElement).toBeInTheDocument();
});
