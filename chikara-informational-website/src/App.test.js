import { render } from '@testing-library/react';
import App from './App';

test('renders team section title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Meet the team/i);
  expect(titleElement).toBeInTheDocument();
});