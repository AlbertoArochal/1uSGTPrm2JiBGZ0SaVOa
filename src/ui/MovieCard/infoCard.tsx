export const InfoCard = ({ result }) => {
    return (
        <div className="InfoCard">
            {" "}
            <h4 className="Infocard__title">{result.title}</h4>
            <p>{result.year}</p>
            <p>{result.description}</p>
        </div>
    );
};
