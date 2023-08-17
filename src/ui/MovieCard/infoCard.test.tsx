import { InfoCard } from "./infoCard";
import { render, screen } from "@testing-library/react";
import results from "../../mocks/results.json";

describe("InfoCard", () => {
    it("should render the component", () => {
        const movie = results.entries[0];
        const MockComponent = () => <InfoCard result={movie} />;
        render(<MockComponent />);
        const crashPoster = screen.getByText("American History X");
        expect(crashPoster).toBeInTheDocument();
    });
});
