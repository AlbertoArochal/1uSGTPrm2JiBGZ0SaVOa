import { MovieType } from "../../Services/Api/api";
export type results = MovieType[];
import { usePagination } from "../../Hooks/usePagination";
import { InfoCard } from "./infoCard";

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
                    <li key={result.title} className="movie">
                        <h3>{result.title}</h3>
                        <img
                            src={result.poster}
                            alt={`${result.title} poster image`}
                        />
                        <InfoCard result={result} />
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
