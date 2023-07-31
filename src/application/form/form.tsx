import { useRef, useContext, useEffect } from "react";
import { MovieContext } from "../../services/context/moviesContext";
import { api } from "../../services/api/api";
export const Form = () => {
  const inputTerm = useRef("");
  const { setSearchTerm } = useContext(MovieContext);
  const { setMovies } = useContext(MovieContext);
  useEffect(() => {
    const getMovies = async () => {
      const movies = await api(inputTerm.current);
      setMovies(movies);
    };
    getMovies();
  }, [inputTerm.current]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchTerm(inputTerm.current);
  };

  const handleChange = (event) => {
    inputTerm.current = event.target.value;
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder="Title" />
      </form>
    </>
  );
};
