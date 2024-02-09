import { fireEvent, render,screen } from "@testing-library/react"
import ResDetails from "../Resdetails";
import {act} from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import Cart from "../Cart";
import MOCK_DATA from "../mockData/ResDetailsMock.json";
import "@testing-library/jest-dom";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            console.log(MOCK_DATA);
            return Promise.resolve(MOCK_DATA);
        }
    });
});

describe("should test the flow of adding items to cart",()=>{

it("should render ResDetails",async()=>{
    await act(async()=>render(<Provider store={appStore}><ResDetails/></Provider>));
    const text=screen.getByText("Recommended (10)");
    expect(text).toBeInTheDocument();
});

it("should expand the accordion",async()=>{
    await act(async()=>render(<Provider store={appStore}><ResDetails/></Provider>));
    const text=screen.getByText("Recommended (10)");
    fireEvent.click(text);
    const items=screen.getAllByTestId("item");
    expect(items.length).toBe(10);
});

it("should have the 'Add to cart' Button",async()=>{
    await act(async()=>render(<Provider store={appStore}><ResDetails/></Provider>));
    const text=screen.getByText("Recommended (10)");
    fireEvent.click(text);
    const btns=screen.getAllByRole("button",{name:"Add to cart"});
    expect(btns.length).toBe(10);
});

it("should update cart icon on header",async()=>{
    await act(async()=>render(<BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    <ResDetails/>
    </Provider>
    </BrowserRouter>
    ));
    const text=screen.getByText("Recommended (10)");
    fireEvent.click(text);
    const btns=screen.getAllByRole("button",{name:"Add to cart"});
    const btn=btns[0];
    fireEvent.click(btn);
    const updatedCart=screen.getByText("Cart - (1 item)");
    expect(updatedCart).toBeInTheDocument();
});

it("should update cart page",async()=>{
    await act(async()=>render(<BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    <ResDetails/>
    <Cart/>
    </Provider>
    </BrowserRouter>
    ));
    const text=screen.getByText("Recommended (10)");
    fireEvent.click(text);
    const btns=screen.getAllByRole("button",{name:"Add to cart"});
    const btn=btns[1];
    fireEvent.click(btn);
    const updatedCart=screen.getByText("Cart - (2 item)");
    expect(updatedCart).toBeInTheDocument();
    const items=screen.getAllByTestId("item");
    expect(items.length).toBe(2);
});

it("should remove 1 item",async()=>{
    await act(async()=>render(<BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    <ResDetails/>
    <Cart/>
    </Provider>
    </BrowserRouter>
    ));
    const text=screen.getByText("Recommended (10)");
    fireEvent.click(text);
    const btns=screen.getAllByRole("button",{name:"Add to cart"});
    const btn=btns[2];
    fireEvent.click(btn);
    const updatedCart=screen.getByText("Cart - (3 item)");
    expect(updatedCart).toBeInTheDocument();
    const items=screen.getAllByTestId("item");
    expect(items.length).toBe(3);
    const removeBtns=screen.getAllByRole("button",{name:"Remove"});
    const removeBtn=removeBtns[0];
    fireEvent.click(removeBtn);
    const afterItems=screen.getAllByTestId("item");
    expect(afterItems.length).toBe(2);
});

it("should clear the cart",async()=>{
    await act(async()=>render(<BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    <ResDetails/>
    <Cart/>
    </Provider>
    </BrowserRouter>
    ));
    const text=screen.getByText("Recommended (10)");
    fireEvent.click(text);
    const btns=screen.getAllByRole("button",{name:"Add to cart"});
    const btn=btns[3];
    fireEvent.click(btn);
    const updatedCart=screen.getByText("Cart - (3 item)");
    expect(updatedCart).toBeInTheDocument();
    const items=screen.getAllByTestId("item");
    expect(items.length).toBe(3);
    const clearCartBtn=screen.getByRole("button",{name:"clearCart"});
    expect(clearCartBtn).toBeInTheDocument();
    fireEvent.click(clearCartBtn);
    const msg=screen.getByText("Your cart is empty!");
    expect(msg).toBeInTheDocument();
});

});