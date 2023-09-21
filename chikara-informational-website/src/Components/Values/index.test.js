import React from "react";
import { render } from "@testing-library/react";
import Value from ".";

describe("Value Component", () => {
  it("renders the component without errors", () => {
    const { container } = render(<Value />);
    expect(container).toBeInTheDocument();
  });

  it("displays the correct title", () => {
    const { getByText } = render(<Value />);
    const titleElement = getByText("Our Values");
    expect(titleElement).toBeInTheDocument();
  });

  it("displays the Integrity card correctly", () => {
    const { getByText, getByTestId } = render(<Value />);
    const integrityCard = getByText("Integrity");
    const integrityDescription = getByText(
      "We maintain the highest standards of accuracy and integrity in collecting, analyzing, and reporting emissions data, ensuring trust and reliability."
    );
    
  });

  
  
});
