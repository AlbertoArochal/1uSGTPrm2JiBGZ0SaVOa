import { useState } from "react";
import { MovieContext, initialState } from "./moviesContext";
import { initialStateType } from "./moviesContext";

export const MovieProvider = ({ children }) => {
  return (
    <MovieContext.Provider value={initialState}>
      {children}
    </MovieContext.Provider>
  );
};
