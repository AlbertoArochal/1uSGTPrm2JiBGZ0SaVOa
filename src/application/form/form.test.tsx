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
        const setSearchTerm = jest.fn();
        const movies = [];
        const setMovies = jest.fn();
        const pagination = {};
        const setPagination = jest.fn();
        const contextValue = {
            setSearchTerm,
            movies,
            setMovies,
            pagination,
            setPagination,
        };

        render(
            <MovieContext.Provider value={contextValue}>
                <Form />
            </MovieContext.Provider>
        );

        const input = screen.getByPlaceholderText("Title");
        const testInputValue = "Avengers";

        fireEvent.change(input, { target: { value: testInputValue } });

        expect(input.value).toBe(testInputValue);
    });
    it("should call setSearchTerm when form is submitted", () => {
        const setSearchTerm = jest.fn();
        const movies = [];
        const setMovies = jest.fn();
        const pagination = {};
        const setPagination = jest.fn();
        const contextValue = {
            setSearchTerm,
            movies,
            setMovies,
            pagination,
            setPagination,
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
