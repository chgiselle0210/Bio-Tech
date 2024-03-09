import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Contacto link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Contacto/i);
  expect(linkElement).toBeInTheDocument();
});
