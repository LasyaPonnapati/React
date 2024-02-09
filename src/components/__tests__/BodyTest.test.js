import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mockData/BodyMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve(MOCK_DATA)
  })
);

it("should render body and give results for searched Restaurant", async () => {
    await act(async()=>render(<BrowserRouter><Body/></BrowserRouter>));

    const searchBtn = screen.getByRole("button",{name:"search"});
    const searchInput=screen.getByTestId("searchInput");
    fireEvent.change(searchInput, {target:{value:"coffee"}});
    fireEvent.click(searchBtn);
    const cards=screen.getAllByTestId("resCard");
    expect(cards.length).toBe(1);

});

it("should render 15 cards when clicked on Ratings4.0+", async () => {
    await act(async()=>render(<BrowserRouter><Body/></BrowserRouter>));

    const ratingsBtn = screen.getByRole("button",{name:"Ratings 4.0+"});
    fireEvent.click(ratingsBtn);
    const cards=screen.getAllByTestId("resCard");
    expect(cards.length).toBe(15);
    
});

it("should render 20 cards when clicked on ALL", async () => {
  await act(async()=>render(<BrowserRouter><Body/></BrowserRouter>));

  const ratingsBtn = screen.getByRole("button",{name:"ALL"});
  fireEvent.click(ratingsBtn);
  const cards=screen.getAllByTestId("resCard");
  expect(cards.length).toBe(20);
  
});

// it("should render 4 cards when clicked on ", async () => {
//   await act(async()=>render(<BrowserRouter><Body/></BrowserRouter>));

//   const ratingsBtn = screen.getByRole("button",{name:"Fast Delivery"});
//   fireEvent.click(ratingsBtn);
//   const cards=screen.getAllByTestId("resCard");
//   expect(cards.length).toBe(0);
  
// });

it("should render 3 cards when clicked on American", async () => {
  await act(async()=>render(<BrowserRouter><Body/></BrowserRouter>));

  const ratingsBtn = screen.getByRole("button",{name:"American"});
  fireEvent.click(ratingsBtn);
  const cards=screen.getAllByTestId("resCard");
  expect(cards.length).toBe(3);
  
});

it("should render 8 cards when clicked on Indian", async () => {
  await act(async()=>render(<BrowserRouter><Body/></BrowserRouter>));

  const ratingsBtn = screen.getByRole("button",{name:"Indian"});
  fireEvent.click(ratingsBtn);
  const cards=screen.getAllByTestId("resCard");
  expect(cards.length).toBe(8);
  
});

it("should render 4 cards when clicked on Chinese", async () => {
  await act(async()=>render(<BrowserRouter><Body/></BrowserRouter>));

  const ratingsBtn = screen.getByRole("button",{name:"Chinese"});
  fireEvent.click(ratingsBtn);
  const cards=screen.getAllByTestId("resCard");
  expect(cards.length).toBe(4);
  
});

it("should render 15 cards when clicked on Desserts", async () => {
  await act(async()=>render(<BrowserRouter><Body/></BrowserRouter>));

  const ratingsBtn = screen.getByRole("button",{name:"Desserts"});
  fireEvent.click(ratingsBtn);
  const cards=screen.getAllByTestId("resCard");
  expect(cards.length).toBe(15);
  
});

it("should render 1 cards when clicked on Only Cafes", async () => {
  await act(async()=>render(<BrowserRouter><Body/></BrowserRouter>));

  const ratingsBtn = screen.getByRole("button",{name:"Only Cafes"});
  fireEvent.click(ratingsBtn);
  const cards=screen.getAllByTestId("resCard");
  expect(cards.length).toBe(1);
  
});
