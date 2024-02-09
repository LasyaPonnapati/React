import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us page should render",()=>{

    // beforeAll(()=>{
    //     console.log("before all testcases");
    // });
    // beforeEach(()=>{
    //     console.log("before Each testcase");
    // });
    // afterAll(()=>{
    //     console.log("after all testcases");
    // });
    // afterEach(()=>{
    //     console.log("after Each testcase");
    // });
    
it("page should render with heading",()=>{

    render(<Contact/>);
    const heading=screen.getByRole("heading");

    //Assertion - a confident and forceful statement of fact or belief.
    expect(heading).toBeInTheDocument();

});

test("page should render with paragraph",()=>{

    render(<Contact/>);
    const para=screen.getByText("my number is 0000000000");

    //Assertion - a confident and forceful statement of fact or belief.
    expect(para).toBeInTheDocument();

});

})