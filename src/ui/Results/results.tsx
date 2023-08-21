import { Buttons } from "../Buttons/buttons";
import { MovieCard } from "../MovieCard/MovieCard";
import { useContext } from "react";
import { MovieContext } from "../../Services/Context/moviesContext";
export const Results = () => {
    const { movies } = useContext(MovieContext);

    return (
        <main>
            <div className="results">
                {" "}
                <div className="results__Title">
                    <h1 className="title">Popular Movies</h1>
                </div>
                <ul className="movies">
                    <MovieCard results={movies} />
                </ul>
            </div>
            <Buttons />
        </main>
    );
};
