import { useContext } from "react";
import { MovieContext } from "../Services/Context/moviesContext";

export const usePagination = (totalItems: number, iTemsperPage: number) => {
    const { pagination, setPagination } = useContext(MovieContext);

    const totalPages = Math.ceil(totalItems / iTemsperPage);

    const nextPage = () => {
        if (pagination < totalPages) {
            setPagination(pagination + 1);
        }
    };

    const prevPage = () => {
        if (pagination > 1) {
            setPagination(pagination - 1);
        }
    };

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setPagination(page);
        }
    };

    return { nextPage, prevPage, pagination, totalPages, goToPage };
};
