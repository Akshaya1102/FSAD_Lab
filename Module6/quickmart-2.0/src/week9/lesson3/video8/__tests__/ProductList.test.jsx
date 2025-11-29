import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductList from '../ProductList';

// Mock the child component - ProductCard
vi.mock('../ProductCard', () => ({
  default: ({ name }) => <div>{name}</div>,
}));

// Mock Products Data for fetch
const mockData = {
  data: [
    { id: 1, name: 'Fresh Apple' },
    { id: 2, name: 'Banana' },
  ],
  prev: null,
  next: 2,
  pages: 3,
};

describe('ProductList Component', () => {
  it('tests useEffect using Mock API response and if products are set using useState ', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({ json: () => Promise.resolve(mockData),});
    render(<MemoryRouter initialEntries={['/products?page=1']}><ProductList /></MemoryRouter>);
    expect(await screen.findByText('Fresh Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();
    expect(await screen.findByText('Page 1')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});
