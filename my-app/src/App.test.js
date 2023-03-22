import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />); //render is a function that takes in a react element and renders it to the DOM.
  const linkElement = screen.getByText(/learn react/i); //screen is a global object that
  expect(linkElement).toBeInTheDocument(); //toBeInTheDocument is a function that is a part of
});
