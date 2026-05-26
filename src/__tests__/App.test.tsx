import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

describe("Application", () => {
  test("renders login page", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });
});