import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Integration test: SearchBar + ProductList', () => {
  it('filters products based on search input', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Wait for both products to be visible initially
    expect(await screen.findByText('Fresh Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();

    // Get the search input and type
    const input = screen.getByPlaceholderText(/search products/i);
    await user.clear(input);
    await user.type(input, 'ban');

    // Ensure filtered results are shown
    expect(screen.getByText('Banana')).toBeInTheDocument();

    // Ensure non-matching product is not shown
    await waitFor(() =>
      expect(screen.queryByText('Fresh Apple')).not.toBeInTheDocument()
    );
  });
});
