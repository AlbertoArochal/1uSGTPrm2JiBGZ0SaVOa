import { MovieCard } from "./MovieCard";
import { render, screen } from "@testing-library/react";
import results from "../../Mocks/results.json";
import { usePagination } from "../../Hooks/usePagination";

describe("MovieCard", () => {
    it("should render the component", () => {
        const movies = results.entries;
        const MockComponent = () => <MovieCard results={movies} />;
        render(<MockComponent />);
        const crashPoster = screen.getByAltText("Crash poster image");
        expect(crashPoster).toBeInTheDocument();
    });
});
