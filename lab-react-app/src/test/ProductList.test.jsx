import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import ProductList from "../components/ProductList";

// Mock ProductCard to isolate ProductList behavior
vi.mock("../components/ProductCard", () => ({
  default: ({ name }) => <div>{name}</div>
}));

// Helper function to render with Redux + Router
function renderWithProviders(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        products: (state = preloadedState.products) => state
      }
    })
  } = {}
) {
  return render(
    <Provider store={store}>
      <MemoryRouter>{ui}</MemoryRouter>
    </Provider>
  );
}

describe("ProductList Component", () => {
  it("renders heading correctly", () => {
    renderWithProviders(<ProductList />, {
      preloadedState: {
        products: { items: [] }
      }
    });

    expect(screen.getByText("Product List")).toBeInTheDocument();
  });

  it("renders product cards from Redux store", () => {
    renderWithProviders(<ProductList />, {
      preloadedState: {
        products: {
          items: [
            {
              id: 1,
              name: "Book",
              category: "Education",
              description: "A useful programming book",
              image: "book.jpg"
            },
            {
              id: 2,
              name: "Pen",
              category: "Stationery",
              description: "A ballpoint pen",
              image: "pen.jpg"
            }
          ]
        }
      }
    });

    expect(screen.getByText("Book")).toBeInTheDocument();
    expect(screen.getByText("Pen")).toBeInTheDocument();
  });

  it("wraps each product in a link with correct route", () => {
    renderWithProviders(<ProductList />, {
      preloadedState: {
        products: {
          items: [
            {
              id: 3,
              name: "Notebook",
              category: "Stationery",
              description: "A spiral notebook",
              image: "notebook.jpg"
            }
          ]
        }
      }
    });

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/product/3");
  });
});
