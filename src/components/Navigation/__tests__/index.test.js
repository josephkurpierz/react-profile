import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

const categories = [
  { name: "Projects" },
];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe("Nav component", () => {
  //baseline test
  it("renders", () => {
    render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );
  });
  // snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );
    //assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

// describe("emoki is visible", () => {
//   it("inserts emoji into the h2", () => {
//     //arrange
//     render(
//       <Nav
//         categories={categories}
//         setCurrentCategory={mockSetCurrentCategory}
//         currentCategory={mockCurrentCategory}
//         contactSelected={mockContactSelected}
//         setContactSelected={mockSetContactSelected}
//       />
//     );
//     //assert
//     expect(screen.getByLabelText("camera")).toHaveTextContent("📸");
//   });
// });

// u
