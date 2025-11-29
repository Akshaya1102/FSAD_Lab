import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Integration test: SearchBar + ProductList', () => {
  it('filters products based on search input', async () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    expect(await screen.findByText('Fresh Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();
    
    const input = screen.getByPlaceholderText('Search products...');
    const user = userEvent.setup();
    // SearchBar.jsx Component
    await user.clear(input);
    await user.type(input, 'ban');

    // ProductList.jsx Component
    // Only Banana should be shown now
    expect(screen.getByText('Banana')).toBeInTheDocument();
    expect(screen.queryByText('Fresh Apple')).not.toBeInTheDocument();
  });
});
