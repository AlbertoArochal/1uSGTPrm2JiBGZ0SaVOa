import { api } from "../services/api/api";
import { useContext } from "react";
import { MovieContext } from "../services/context/moviesContext";
export const useMovies = (inputTerm) => {
  const { setMovies } = useContext(MovieContext);
  const getMovies = async () => {
    const movies = await api(inputTerm.current);
    setMovies(movies);
  };
  return getMovies;
};
