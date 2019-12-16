import React from 'react';
import { render } from '@testing-library/react';
import About from '../components/About';

describe('rendering links', () => {
  test('renders email', () => {
    const { getByText } = render(<About />);
    const linkElement = getByText('paul_luu.work@hotmail.com');
    expect(linkElement).toBeInTheDocument();
  });

  test('renders linkedin link', () => {
    const { getByText } = render(<About />);
    const linkElement = getByText('http://www.linkedin.com/in/paul-luu-55bb0614a');
    expect(linkElement).toBeInTheDocument();
  });

  test('renders github link', () => {
    const { getByText } = render(<About />);
    const linkElement = getByText('https://github.com/ImmutableBox');
    expect(linkElement).toBeInTheDocument();
  });

  test('renders blog link', () => {
    const { getByText } = render(<About />);
    const linkElement = getByText('https://paulopensourceblog.wordpress.com');
    expect(linkElement).toBeInTheDocument();
  });
});
