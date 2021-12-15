export default function AboutMe({ aboutMe, language }) {
    return (
        <>
            <h2>{aboutMe.type}</h2>
            <div className="line" />

            <div className="item">
                <p>{aboutMe.text[language.language]}</p>
            </div>
        </>
    );
}
