import { render, screen } from "@testing-library/react";
import Rescard from "../Rescard";
import MOCK_DATA from "../mockData/ResCardMock.json";
import "@testing-library/jest-dom";
import HOC from "../HOC";

it("should render ResCard with props", () => {
    render(
        <Rescard resData={MOCK_DATA}/>
    );

    const name = screen.getByText("Brahmins' Thatte Idli");
    expect(name).toBeInTheDocument();
});

it("should render ResCard with label", () => {
    const Component = HOC(Rescard);

    render(<Component resData={MOCK_DATA} />);

    const label = screen.getByText("open");
    expect(label).toBeInTheDocument();
});

