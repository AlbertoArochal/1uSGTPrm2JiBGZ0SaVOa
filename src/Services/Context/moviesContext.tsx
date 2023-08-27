import { createContext } from "react";
import { MovieType } from "../Api/api";

export type MovieContextType = {
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
    movies: MovieType[];
    setMovies: (movies: MovieType[]) => void;
    pagination: number;
    setPagination: (pagination: number) => void;
};

export const initialState: MovieContextType = {
    searchTerm: "",
    setSearchTerm: () => {},
    movies: [],
    setMovies: () => {},
    pagination: 1,
    setPagination: () => {},
};

export const MovieContext = createContext<MovieContextType>({
    searchTerm: "",
    setSearchTerm: () => {},
    movies: [],
    setMovies: () => {},
    pagination: 1,
    setPagination: () => {},
});
