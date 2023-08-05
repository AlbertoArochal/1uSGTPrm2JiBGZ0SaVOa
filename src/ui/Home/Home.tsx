import styles from "./Home.module.css";
import { MovieContext } from "../../services/context/moviesContext";
import { MovieCard } from "../MovieCard/MovieCard";
import { useContext } from "react";
import { Buttons } from "../Buttons/buttons";

export function Home() {
  const { movies } = useContext(MovieContext);

  return (
    <main>
      <div className="results">
        {" "}
        <div className="Results__Title">
          <h1 className="Title">Popular Movies</h1>
        </div>
        <ul className="Movies">
          <MovieCard results={movies} />
        </ul>
      </div>
      <Buttons />
    </main>
  );
}
