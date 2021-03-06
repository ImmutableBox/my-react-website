// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// Fixes "matchMedia not present, legacy browsers require a polyfill" error
window.matchMedia = window.matchMedia || function matchMedia() {
  return {
    matches: false,
    addListener() {},
    removeListener() {},
  };
};
