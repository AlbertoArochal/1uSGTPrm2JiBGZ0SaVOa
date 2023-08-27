import response from "../../Mocks/results.json";

export type MovieType = {
    title: string;
    description: string;
    poster: string;
    year: string;
};

export const api = async (searchTerm: string) => {
    try {
        const movies = response.entries;

        if (movies.length > 0) {
            const mappedMovies = movies.map((movie: any) => {
                return {
                    title: movie.title,
                    description: movie.description,
                    poster: movie.images.posterArt.url,
                    year: movie.releaseYear,
                };
            });

            if (searchTerm) {
                return mappedMovies.filter((movie: MovieType) => {
                    return movie.title
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase());
                });
            }

            return mappedMovies;
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error in api:", error);
        throw error;
    }
};
