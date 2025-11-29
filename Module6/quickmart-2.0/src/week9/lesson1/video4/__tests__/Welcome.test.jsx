import { it,expect} from "vitest";
import { render,screen} from '@testing-library/react';
import Welcome from "../Welcome";

it('renders Welcome and validates the content', () => {
  render(<Welcome name="John" />);
  /* errors out as we are missing ! in the text
  expect(screen.getByText("Hello, John")).toBeInTheDocument(); 
  */
  expect(screen.getByText("Hello, John")).toBeInTheDocument();
  expect(screen.queryByText("Hello, Jack")).not.toBeInTheDocument();
  
});