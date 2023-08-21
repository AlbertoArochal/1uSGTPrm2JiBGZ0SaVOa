import { render } from "@testing-library/react";
import { MovieProvider } from "./moviesProvider";
import { MovieContext } from "./moviesContext";

const MockConsumer = ({ children }) => {
    return (
        <MovieContext.Consumer>
            {(contextValue) => children(contextValue)}
        </MovieContext.Consumer>
    );
};

describe("MovieProvider", () => {
    test("provides the correct context values", () => {
        const searchTerm = "TestSearch";
        const pagination = 1;

        const { getByText } = render(
            <MovieProvider>
                <MockConsumer>
                    {(contextValue) => (
                        <>
                            <div>{contextValue.pagination}</div>
                        </>
                    )}
                </MockConsumer>
            </MovieProvider>
        );

        expect(getByText(pagination.toString())).toBeInTheDocument();
    });
});
