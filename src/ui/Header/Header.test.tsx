import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("header tests", () => {
    it("should render the header image", () => {
        render(<Header />);
        const headerImg = screen.getByAltText("Deadful Cherry Tomatoes");
        expect(headerImg).toBeInTheDocument();
    });
    it("should render form mock", () => {
        render(<Header />);
        const form = screen.getByAltText("search icon");
        expect(form).toBeInTheDocument();
    });
});
