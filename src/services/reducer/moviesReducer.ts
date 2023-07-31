import { SET_MOVIES, SET_SEARCH_TERM } from "./actions";
import { initialState } from "../context/moviesContext";
import { MovieType } from "../api/api";
// Define el tipo de acción
export type Action =
  | { type: typeof SET_MOVIES; payload: MovieType[] }
  | { type: typeof SET_SEARCH_TERM; payload: string };

// Define el tipo del reducer
export const moviesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};
