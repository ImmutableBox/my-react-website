import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

test('renders copyright text', () => {
  const { getByText } = render(<App />);
  const copyrightElement = getByText('© 2019-2021 Paul Luu');
  expect(copyrightElement).toBeInTheDocument();
});
