import { it,expect,vi, afterEach} from "vitest";
import { render,screen} from '@testing-library/react';
import ProductCard from "../ProductCard";
import { MemoryRouter } from 'react-router-dom';

// Mock CartContext, Creates a mock function you can use in place of a real one.
vi.mock('../context/CartContext', () => ({
  useCart: () => ({
    incrementCart: vi.fn(),
  }),
}));

it('renders static text: Add to Cart button', () => {
  render(
    <MemoryRouter>
      <ProductCard />
    </MemoryRouter>
  );
  expect(screen.getByRole('button', /add to cart/i)).toBeInTheDocument();
});


it('renders with props: name and price', () => {
    render(
      <MemoryRouter>
        <ProductCard name="Test Product" price={999} />
      </MemoryRouter>
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('₹999')).toBeInTheDocument();
});

afterEach(() => {
  vi.restoreAllMocks();
});