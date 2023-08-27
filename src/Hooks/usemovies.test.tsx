import { render, screen, fireEvent } from "@testing-library/react";
import { useMovies } from "./useMovies";
import { MovieContext } from "../Services/Context/moviesContext";
import { api } from "../Services/Api/api";
import React from "react";

jest.mock("../services/api/api");

test("getMovies should call api", async () => {
    const inputTerm = { current: "Avengers" };
    const setMovies = jest.fn();
    const setPagination = jest.fn();
    const searchTerm = "";
    const setSearchTerm = jest.fn();
    const movies = [];
    const pagination = 1;
    const contextValue = {
        setMovies,
        setPagination,
        setSearchTerm,
        movies,
        pagination,
        searchTerm,
    };

    const MockComponent = () => {
        const getMovies = useMovies(inputTerm);
        getMovies();

        const buttonHandler = () => {
            getMovies();
        };

        return (
            <div>
                <button onClick={buttonHandler}>useMovies</button>
            </div>
        );
    };

    render(
        <MovieContext.Provider value={contextValue}>
            <MockComponent />
        </MovieContext.Provider>
    );

    const button = screen.getByText("useMovies");
    fireEvent.click(button);
});
