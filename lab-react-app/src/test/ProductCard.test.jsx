import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import ProductCard from "../components/ProductCard";

describe("ProductCard Component", () => {
  const mockProps = {
    name: "Book",
    category: "Education",
    description: "A useful programming book",
    image: "book.jpg",
  };

  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  it("renders product details correctly", () => {
    render(<ProductCard {...mockProps} />);

    expect(screen.getByText("Book")).toBeInTheDocument();
    expect(screen.getByText("Education")).toBeInTheDocument();
    expect(screen.getByText("A useful programming book")).toBeInTheDocument();

    const image = screen.getByAltText("Book");
    expect(image).toHaveAttribute("src", "book.jpg");
  });

  it("initially shows zero likes", () => {
    render(<ProductCard {...mockProps} />);

    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
    expect(
      screen.getByText("Give this product a like!")
    ).toBeInTheDocument();
  });

  it("increments likes when Like button is clicked", () => {
    render(<ProductCard {...mockProps} />);

    const button = screen.getByText("Like");
    fireEvent.click(button);
    fireEvent.click(button);

    expect(screen.getByText("Likes: 2")).toBeInTheDocument();
  });

  it("shows popularity message when likes exceed 5", () => {
    render(<ProductCard {...mockProps} />);

    const button = screen.getByText("Like");

    for (let i = 0; i < 6; i++) {
      fireEvent.click(button);
    }

    expect(
      screen.getByText("This product is popular!")
    ).toBeInTheDocument();
  });

  it("logs message whenever likes change", () => {
    render(<ProductCard {...mockProps} />);

    const button = screen.getByText("Like");
    fireEvent.click(button);

    expect(console.log).toHaveBeenCalledWith(
      "Book has 1 likes now"
    );
  });
});
