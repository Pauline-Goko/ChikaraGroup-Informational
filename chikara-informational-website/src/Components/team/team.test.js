import { render } from "@testing-library/react";
import Team from ".";

test('renders team section', () => {
  const { getByText, getByAltText } = render(<Team />);
  
  // Check if the title and description are rendered
  const titleElement = getByText(/Meet the team/i);
  const descriptionElement = getByText(/Meet our exceptional team/i);

  expect(titleElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();

  // Check if all team members are rendered
  const mariaImage = getByAltText(/Mariagoretti Kimani/i);
  const purityImage = getByAltText(/Purity Wanjiku/i);
  const kenyaniImage = getByAltText(/Rachel Kenyani/i);
  const paulineImage = getByAltText(/Pauline Goko/i);
  const ritaImage = getByAltText(/Rita Khaseyi/i);

  expect(mariaImage).toBeInTheDocument();
  expect(purityImage).toBeInTheDocument();
  expect(kenyaniImage).toBeInTheDocument();
  expect(paulineImage).toBeInTheDocument();
  expect(ritaImage).toBeInTheDocument();
});
