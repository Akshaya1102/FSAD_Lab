import { it, expect, describe } from "vitest";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Login from '../Login';

// describe
describe('Login Component', () => {
  it('renders email and password inputs', () => {
    render(<MemoryRouter><Login /></MemoryRouter>);
    expect(screen.getByPlaceholderText(/Enter your email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your password/i)).toBeInTheDocument();
  });

  it('shows validation error when submitting empty form', async () => {
    render(<MemoryRouter><Login /></MemoryRouter>);
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /login/i }));
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/password is required/i)).toBeInTheDocument();
  });

  it('shows error for invalid email', async () => {
    render(<MemoryRouter><Login /></MemoryRouter>);
    const user = userEvent.setup();
    await user.type(screen.getByPlaceholderText(/Enter your email/i), 'invalidemail');
    await user.type(screen.getByPlaceholderText(/Enter your password/i), '123456');
    await user.click(screen.getByRole('button', { name: /login/i }));
    expect(screen.getByText(/enter a valid email/i)).toBeInTheDocument();
  });
});
