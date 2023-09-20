import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '.';

describe('Navbar component', () => {
  it('renders without errors', () => {
    render(<Navbar />);
   
  });

  it('displays the logo', () => {
    render(<Navbar />);
    const logo = screen.getByAltText('Your Logo');
    expect(logo).toBeInTheDocument();
  });

  it('displays navigation links on larger screens', () => {
   
    Object.defineProperty(window, 'innerWidth', { value: 1024, writable: true });

    render(<Navbar />);
    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });



});
