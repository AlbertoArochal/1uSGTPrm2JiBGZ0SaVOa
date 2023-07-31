import styles from "./Home.module.css";
import { MovieContext } from "../../services/context/moviesContext";
import { MovieCard } from "../MovieCard/MovieCard";
import { useContext } from "react";

export function Home() {
  const { movies } = useContext(MovieContext);

  return (
    <main>
      <div className="results">
        {" "}
        <ul className="Movies">
          <MovieCard results={movies} />
        </ul>
      </div>
    </main>
  );
}
