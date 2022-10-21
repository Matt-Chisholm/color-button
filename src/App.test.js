import { render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

test("button has correct initial text", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton.textContent).toBe("Change to blue");
});

test("button turns blue when clicked", () => {});
