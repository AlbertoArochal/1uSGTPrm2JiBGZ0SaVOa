import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

describe("Home", () => {
    it("renders the header", () => {
        render(<Home />);
        const header = screen.getByText("Popular Movies");
        expect(header).toBeInTheDocument();
    });

    it("renders the footer", () => {
        render(<Home />);
        const footer = screen.getByAltText("Google Play");
        expect(footer).toBeInTheDocument();
    });
});
