import { MovieType } from "../../services/api/api";
export type results = MovieType[];

export const MovieCard = ({ results: results }) => {
  if (results) {
    return (
      <>
        {" "}
        {results.map((result: MovieType) => (
          <li key={result.title}>
            <h2>{result.title}</h2>
            <img src={result.poster} alt={`${result.title} poster image`} />
            <p>{result.description}</p>
            <p>{result.year}</p>
          </li>
        ))}
      </>
    );
  } else
    <li>
      <h2>Sorry, no results found.</h2>
    </li>;
};
