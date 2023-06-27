import { fireEvent, render, screen } from "@testing-library/react";
import ActionButton from "../ActionButton";

test("renders ActionButton with title", () => {
  render(<ActionButton title="button name" />);
  const buttonEl = screen.getByRole("button");
  fireEvent.click(buttonEl, "");
  expect(buttonEl).toBeInTheDocument();
});
