import { MovieType } from "../../services/api/api";
import { useContext } from "react";
import { MovieContext } from "../../services/context/moviesContext";
export type results = MovieType[];
import { usePagination } from "../../hooks/usePagination";

export const MovieCard = ({ results }) => {
  const { pagination, totalPages, nextPage, prevPage, goToPage } =
    usePagination(results.length, 10);

  if (results) {
    const paginatedResults = results.slice(
      (pagination - 1) * 10,
      pagination * 10
    );
    return (
      <>
        {paginatedResults.map((result: MovieType) => (
          <li key={result.title} className="Movie">
            <h2>{result.title}</h2>
            <img src={result.poster} alt={`${result.title} poster image`} />
            <p>{result.description}</p>
            <p>{result.year}</p>
          </li>
        ))}
      </>
    );
  } else {
    return (
      <li>
        <h2>Sorry, no results found.</h2>
      </li>
    );
  }
};
