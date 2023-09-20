import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from ".";

describe("Footer component", () => {
  it("renders the 'More about the company' section correctly", () => {
    render(<Footer />);
    const companyDescription = screen.getByText(
      "At Chikara eco, we are on a mission to create a sustainable world. Our commitment is to reduce carbon emissions and promote eco-friendly practices that lead to a greener future."
    );
    expect(companyDescription).toBeInTheDocument();
  });

  it("renders the 'Quick Links' section correctly", () => {
    render(<Footer />);
    const quickLinks = screen.getByText("Quick Links");
    expect(quickLinks).toBeInTheDocument();
    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();
    const aboutLink = screen.getByText("About");
    expect(aboutLink).toBeInTheDocument();
    const productsLink = screen.getByText("Products");
    expect(productsLink).toBeInTheDocument();
    const teamLink = screen.getByText("Team");
    expect(teamLink).toBeInTheDocument();
  });

  it("renders the 'Talk To Us' section correctly", () => {
    render(<Footer />);
    const talkToUs = screen.getByText("Talk To Us");
    expect(talkToUs).toBeInTheDocument();
    const supportEmail = screen.getByText("support@chikara.com");
    expect(supportEmail).toBeInTheDocument();
    const infoEmail = screen.getByText("info@chikara.com");
    expect(infoEmail).toBeInTheDocument();
    const phone1 = screen.getByText("+2547 5454 5252");
    expect(phone1).toBeInTheDocument();
    const phone2 = screen.getByText("+2547 2326 6232");
    expect(phone2).toBeInTheDocument();
  });

  it("renders the social media links correctly", () => {
    render(<Footer />);
    const facebookLink = screen.getByTitle("Facebook");
    expect(facebookLink).toHaveAttribute(
      "href",
      "https://www.facebook.com/"
    );
    const twitterLink = screen.getByTitle("Twitter");
    expect(twitterLink).toHaveAttribute(
      "href",
      "https://twitter.com/"
    );
    const instagramLink = screen.getByTitle("Instagram");
    expect(instagramLink).toHaveAttribute(
      "href",
      "https://www.instagram.com/"
    );
  });

  it("renders the copyright text correctly", () => {
    render(<Footer />);
    const copyrightText = screen.getByText("© 2023 Chikara. All rights reserved.");
    expect(copyrightText).toBeInTheDocument();
  });
});
