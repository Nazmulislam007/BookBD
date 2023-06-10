import App from "@/App";
import { render, screen } from "@testing-library/react";

test("renders headline", () => {
  render(<App />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(3);
});
