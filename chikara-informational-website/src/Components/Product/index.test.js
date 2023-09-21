import React from 'react';
import { render } from '@testing-library/react';
import Product from '.';

test('Product component renders without errors', () => {
  render(<Product />);
});

test('Product component displays product title correctly', () => {
  const { getByText } = render(<Product />);
  const productTitle = getByText('Our Product');
  expect(productTitle).toBeInTheDocument();
});

test('Product component displays product description correctly', () => {
  const { getByText } = render(<Product />);
  const productDescription = getByText(/Our Portable Emissions Measurement System \(PEMS\) is designed/i);
  expect(productDescription).toBeInTheDocument();
});

test('Product component displays key features correctly', () => {
  const { getByText } = render(<Product />);
  const feature1 = getByText(/Accurate measurement of carbon dioxide \(CO2\) emissions in vehicle exhaust gases./i);
  const feature2 = getByText(/Real-time emissions monitoring for immediate feedback on environmental impact./i);
  const feature3 = getByText(/Secure and easy-to-use attachment mechanism for various vehicle exhaust pipes./i);
  const feature4 = getByText(/Compliance with emissions testing regulations and standards./i);

  expect(feature1).toBeInTheDocument();
  expect(feature2).toBeInTheDocument();
  expect(feature3).toBeInTheDocument();
  expect(feature4).toBeInTheDocument();
});

test('Product component displays FontAwesome icons correctly', () => {
  const { getAllByTestId } = render(<Product />);
  const icons = getAllByTestId('fa-circle-check-icon');

  expect(icons).toHaveLength(4); 
});
