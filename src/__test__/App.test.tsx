import App from "@/App";
import { render, screen } from "@testing-library/react";

test("renders headline", () => {
  render(<App />);
  const headline = screen.getByText(/helo/i);
  expect(headline).toBeInTheDocument();
});
