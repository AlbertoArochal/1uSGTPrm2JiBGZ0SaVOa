import { render, screen } from "@testing-library/react";
import { Form } from "./form";
import { MovieContext } from "../../services/context/moviesContext";
import { fireEvent } from "@testing-library/dom";

describe("form in header", () => {
    it("should render the form", () => {
        render(<Form />);
        const form = screen.getByPlaceholderText("Title");
        expect(form).toBeInTheDocument();
    });

    test("inputTerm se actualiza al escribir en el campo de entrada", () => {
        render(
            <MovieContext.Provider
                value={{
                    setSearchTerm: jest.fn(),
                    movies: [],
                    setMovies: jest.fn(),
                    pagination: 1,
                    setPagination: jest.fn(),
                    searchTerm: "",
                }}
            >
                <Form />
            </MovieContext.Provider>
        );

        const input = screen.getByPlaceholderText("Title") as HTMLInputElement;
        const testInputValue = "Avengers";

        fireEvent.change(input, { target: { value: testInputValue } });

        expect(input.value).toBe(testInputValue);
    });

    it("should call setSearchTerm when form is submitted", () => {
        const setSearchTerm = jest.fn();
        const movies = [];
        const searchTerm = "";
        const setMovies = jest.fn();
        const pagination = 1;
        const setPagination = jest.fn();
        const contextValue = {
            setSearchTerm,
            movies,
            setMovies,
            pagination,
            setPagination,
            searchTerm,
        };

        render(
            <MovieContext.Provider value={contextValue}>
                <Form />
            </MovieContext.Provider>
        );

        const form = screen.getByPlaceholderText("Title");
        const testInputValue = "Avengers";

        fireEvent.change(form, { target: { value: testInputValue } });
        fireEvent.submit(form);

        expect(setSearchTerm).toHaveBeenCalledWith(testInputValue);
    });
});
