import { useRef, useContext, useEffect } from "react";
import { MovieContext } from "../../Services/Context/moviesContext";
import { useMovies } from "../../Hooks/useMovies";
import searchIcon from "../../Assets/icon/search.svg";
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
                <input
                    onChange={handleChange}
                    type="text"
                    placeholder="Title"
                />
            </form>
        </>
    );
};
