import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renders header', () => {
  const { getByText } = render(<App />);
  const headerEl = getByText(/Employee Directory/i);
  expect(headerEl).toBeInTheDocument();
});

test('Renders search bar', () => {
  const { getAllByText } = render(<App />);
  const searchEl = getAllByText(/Search Employees/i);
  expect(searchEl.length).toBe(2);
});

test('Renders employee table', () => {
  const { getByLabelText } = render(<App />);
  const tableEl = getByLabelText('employee table');
  expect(tableEl).toBeInTheDocument();
});

test('Renders employees', async () => {
  const { findAllByTestId } = render(<App />);
  const employeeEl = await findAllByTestId('employee');
  expect(employeeEl.length > 0).toBe(true);
});
