import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renders header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Employee Directory/i);
  expect(linkElement).toBeInTheDocument();
});
