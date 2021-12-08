export default function Work(object) {
    return (
        <div className="items">
            <h2>{object.object.work.type}</h2>
            <div className="line"></div>

            {Object.entries(object.object.work.content).map((parameter) => (
                <div className="item" key={parameter[1].title}>
                    <h3>{parameter[1].title}</h3>
                    {parameter[1].img !== "" && (
                        <img alt={parameter[1].img} src={parameter[1].img} />
                    )}
                    <p>{parameter[1].text[object.object.language.language]}</p>
                    <p>
                        GitHub Repository:{" "}
                        <a href={parameter[1].github}>Link</a>
                        {parameter[1].website !== "" && (
                            <>
                                <br />
                                {object.object.language.website}: <a href={parameter[1].website}>Link</a>
                            </>
                        )}
                    </p>
                    <p>
                        {object.object.language.technologies}: <b>{parameter[1].technologies} </b>
                    </p>
                </div>
            ))}
        </div>
    );
}
