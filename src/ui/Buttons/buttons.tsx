import { usePagination } from "../../hooks/usePagination";
import { useContext } from "react";
import { MovieContext } from "../../services/context/moviesContext";

export const Buttons = () => {
    const { movies } = useContext(MovieContext);
    const { pagination, totalPages, nextPage, prevPage, goToPage } =
        usePagination(movies.length, 10);

    const pagesNumber = Array.from(Array(totalPages).keys());

    return (
        <div className="buttonPad">
            <div className="buttons">
                <button className="arrowButton" onClick={prevPage}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M6.47532 13.1554L14.8446 21.5122C15.1528 21.8375 15.5377 22 16 22C16.4623 22 16.8472 21.8373 17.1554 21.5122L18.131 20.5493C18.4477 20.2327 18.6061 19.8477 18.6061 19.3942C18.6061 18.9492 18.4478 18.5597 18.131 18.226L11.8924 12L18.1313 5.76109C18.4479 5.44442 18.6063 5.0595 18.6063 4.60588C18.6063 4.16093 18.448 3.77129 18.1313 3.43776L17.1556 2.47498C16.8389 2.15831 16.4537 2 16.0002 2C15.5466 2 15.1614 2.15831 14.8448 2.47498L6.47532 10.8318C6.15852 11.1656 6.00003 11.555 6.00003 12C5.99998 12.4536 6.15852 12.8387 6.47532 13.1554Z"
                            fill="white"
                        />
                    </svg>
                </button>
                {pagesNumber.map((page) => (
                    <button
                        key={`Page ${page} `}
                        className={
                            pagination === page + 1
                                ? "numericalButton active"
                                : "numericalButton"
                        }
                        onClick={() => goToPage(page + 1)}
                    >
                        {page + 1}
                    </button>
                ))}
                <button className="arrowButton" onClick={nextPage}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M18.1309 10.8446L9.76163 2.48775C9.45341 2.16254 9.06854 2 8.60623 2C8.14393 2 7.75906 2.16272 7.45084 2.48775L6.47525 3.45066C6.15854 3.76733 6.00018 4.15225 6.00018 4.60583C6.00018 5.05082 6.15849 5.44033 6.47525 5.77399L12.7139 12L6.47498 18.2389C6.15836 18.5556 6 18.9405 6 19.3941C6 19.8391 6.15831 20.2287 6.47498 20.5622L7.45066 21.525C7.76733 21.8417 8.15261 22 8.60605 22C9.05968 22 9.44487 21.8417 9.76145 21.525L18.1309 13.1682C18.4477 12.8344 18.6062 12.445 18.6062 12C18.6063 11.5464 18.4477 11.1613 18.1309 10.8446Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};
