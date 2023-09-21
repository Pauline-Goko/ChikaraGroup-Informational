import React from 'react';
import { render } from '@testing-library/react';
import Hero from '.';

test('renders the Hero component without errors', () => {
  render(<Hero />);
});


test('displays the "YOUR PARTNER IN SUSTAINABILITY" title', () => {
  const { getByText } = render(<Hero />);
  const titleElement = getByText('YOUR PARTNER IN SUSTAINABILITY');
  expect(titleElement).toBeInTheDocument();
});


test('renders the "Learn More" button', () => {
  const { getByText } = render(<Hero />);
  const buttonElement = getByText('Learn More');
  expect(buttonElement).toBeInTheDocument();
});

test('renders the video element with a "background-video" class', () => {
  const { container } = render(<Hero />);
  const videoElement = container.querySelector('.background-video');
  expect(videoElement).toBeInTheDocument();
});


test('renders a text section with a "text-section" class', () => {
  const { container } = render(<Hero />);
  const textSection = container.querySelector('.text-section');
  expect(textSection).toBeInTheDocument();
});

test('renders a title element with a "text-title" class', () => {
  const { container } = render(<Hero />);
  const titleElement = container.querySelector('.text-title');
  expect(titleElement).toBeInTheDocument();
});
