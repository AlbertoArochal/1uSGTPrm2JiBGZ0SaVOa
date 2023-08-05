import { useRef, useContext, useEffect } from "react";
import { MovieContext } from "../../services/context/moviesContext";
import { useMovies } from "../../hooks/useMovies";
import searchIcon from "../../assets/icon/search.svg";
export const Form = () => {
  const inputTerm = useRef("");
  const { setSearchTerm } = useContext(MovieContext);
  const getMovies = useMovies(inputTerm);
  useEffect(() => {
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
      <form action="" onSubmit={handleSubmit} className="header__form">
        <img src={searchIcon} alt="search icon" className="searchIcon" />
        <input onChange={handleChange} type="text" placeholder="Title" />
      </form>
    </>
  );
};
