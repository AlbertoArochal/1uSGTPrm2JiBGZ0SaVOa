import { ReactNode, useState } from "react";
import { MovieContext, initialState } from "./moviesContext";
import { moviesReducer } from "../Reducer/moviesReducer";

export const MovieProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState(initialState.searchTerm);
    const [movies, setMovies] = useState(initialState.movies);
    const [pagination, setPagination] = useState(initialState.pagination);

    return (
        <MovieContext.Provider
            value={{
                searchTerm,
                setSearchTerm,
                movies,
                setMovies,
                pagination,
                setPagination,
            }}
        >
            {children}
        </MovieContext.Provider>
    );
};
