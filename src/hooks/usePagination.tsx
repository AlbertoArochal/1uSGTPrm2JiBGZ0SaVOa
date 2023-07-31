import { useContext } from "react";
import { MovieContext } from "../services/context/moviesContext";

export const usePagination = () => {
  const { pagination, setPagination } = useContext(MovieContext);
  const handleNextPage = () => {
    setPagination(pagination + 1);
  };
  const handlePrevPage = () => {
    setPagination(pagination - 1);
  };
  return { handleNextPage, handlePrevPage };
};
