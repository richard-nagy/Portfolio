export default function Work({ work, language }) {
    return (
        <>
            <h2>{work.type}</h2>
            <div className="line"></div>

            {Object.entries(work.content).map((parameter) => (
                <div className="item" key={parameter[1].title}>
                    <h3>{parameter[1].title}</h3>
                    {parameter[1].img !== "" && (
                        <img alt={parameter[1].img} src={parameter[1].img} />
                    )}
                    <p>{parameter[1].text[language.language]}</p>
                    <p>
                        GitHub Repository:{" "}
                        <a href={parameter[1].github}>Link</a>
                        {parameter[1].website !== "" && (
                            <>
                                <br />
                                {language.website}:{" "}
                                <a href={parameter[1].website}>Link</a>
                            </>
                        )}
                    </p>
                    <p>
                        {language.technologies}:{" "}
                        <b>{parameter[1].technologies} </b>
                    </p>
                </div>
            ))}
        </>
    );
}
