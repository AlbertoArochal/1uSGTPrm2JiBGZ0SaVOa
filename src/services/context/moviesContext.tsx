import { createContext } from "react";

export type initialStateType = {
  movies: [];
  setMovies: (movies: []) => void;
};

export const initialState: initialStateType = {
  movies: [],
  setMovies: () => {},
};

export const MovieContext = createContext(initialState);
