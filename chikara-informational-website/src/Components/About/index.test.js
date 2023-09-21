import React from "react";
import { render, screen } from "@testing-library/react";
import About from ".";

test("renders About component", () => {
  render(<About />);

  const aboutSection = screen.getByTestId("about-section");
  expect(aboutSection).toBeInTheDocument();

  const aboutTitle = screen.getByText("About Us");
  expect(aboutTitle).toBeInTheDocument();

  const missionDescription = screen.getByText(
    "Our mission is to develop innovative solutions for tracking and reducing carbon emissions, empowering individuals and businesses to contribute to a greener planet."
  );
  expect(missionDescription).toBeInTheDocument();

  const visionDescription = screen.getByText(
    "A world with cleaner air and a healthier planet through sustainable practices and reduced carbon emissions."
  );
  expect(visionDescription).toBeInTheDocument();
});
test("renders the 'contain' div with the correct class", () => {
    const { container } = render(<About />);
    const containDiv = container.querySelector(".contain");
    expect(containDiv).toBeInTheDocument();
  });