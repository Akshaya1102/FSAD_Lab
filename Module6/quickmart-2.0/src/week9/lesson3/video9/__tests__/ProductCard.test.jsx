import { it,expect,vi} from "vitest";
import { render,screen} from '@testing-library/react';
import ProductCard from "../ProductCard";
import { MemoryRouter } from 'react-router-dom';

// Mock CartContext
vi.mock('../context/CartContext', () => ({
  useCart: () => ({
    incrementCart: vi.fn(),
  }),
}));

it('renders static text: Add to Cart button', () => {
  render(<MemoryRouter><ProductCard /></MemoryRouter>);
  expect(screen.getByRole('button', /add to cart/i)).toBeInTheDocument();
});


it('renders with props: name and price', () => {
    render(<MemoryRouter><ProductCard name="Test Product" price={999} /></MemoryRouter>);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('₹999')).toBeInTheDocument();
});

it('renders correctly and matches snapshot', () => {
    const { container } = render(<MemoryRouter><ProductCard name="Sample Product" /></MemoryRouter>);
    expect(container).toMatchSnapshot();
});