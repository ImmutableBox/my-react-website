import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '../components/NotFound';

describe('checking text', () => {
  test('not found text', () => {
    const { getByText } = render(<NotFound />);
    const notFoundText = getByText('Page Not Found');
    expect(notFoundText).toBeInTheDocument();
  });

  test('page not found text', () => {
    const { getByText } = render(<NotFound />);
    const notFoundText = getByText('The page you are looking for was not found.');
    expect(notFoundText).toBeInTheDocument();
  });
});
