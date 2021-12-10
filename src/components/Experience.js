export default function Experience({ experience, language }) {
    return (
        <div className="items">
            <h2>{experience.type}</h2>
            <div className="line" />

            {Object.entries(experience.content).map((parameter) => (
                <div className="item" key={parameter[1].title}>
                    <h3>{parameter[1].title}</h3>
                    <p>{parameter[1].text[language.language]}</p>
                    <p>
                        {language.technologies}:{" "}
                        <b>{parameter[1].technologies} </b>
                    </p>
                </div>
            ))}
        </div>
    );
}
