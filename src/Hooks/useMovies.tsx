import { api } from "../Services/Api/api";
import { useContext } from "react";
import { MovieContext } from "../Services/Context/moviesContext";
export const useMovies = (inputTerm) => {
    const { setMovies, setPagination } = useContext(MovieContext);
    const maxResults = 10;

    const getMovies = async () => {
        setPagination(1);
        const movies = await api(inputTerm.current);

        setMovies(movies);
    };
    return getMovies;
};
