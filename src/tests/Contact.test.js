import React from 'react';
import { render } from '@testing-library/react';
import Contact from '../components/Contact';

describe('rendering links', ()=> {
    test('renders email', () => {
        const { getByText } = render(<Contact />);
        const linkElement = getByText("paul_luu.work@hotmail.com");
        expect(linkElement).toBeInTheDocument();
    });

    test('renders linkedin link', () => {
        const { getByText } = render(<Contact />);
        const linkElement = getByText("http://www.linkedin.com/in/paul-luu-55bb0614a");
        expect(linkElement).toBeInTheDocument();
    });

    test('renders github link', () => {
        const { getByText } = render(<Contact />);
        const linkElement = getByText("https://github.com/ImmutableBox");
        expect(linkElement).toBeInTheDocument();
    });

    test('renders blog link', () => {
        const { getByText } = render(<Contact />);
        const linkElement = getByText("https://paulopensourceblog.wordpress.com");
        expect(linkElement).toBeInTheDocument();
    });
});