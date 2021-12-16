const experience = {
	mate: {
		title: {
			EN: "REACT DEVELOPER",
			HU: "REACT FEJLESZTŐ",
		},
		text: {
			EN: "Intership in the developer department of the school, where we learned React and developed React websites.",
			HU: "Szakmai gyakorlat az iskola fejlesztői alatt, ahol Reactot tanultunk és React weboldalakat fejleszettünk.",
		},
	},
};

export default function Experience({ language }) {
	return (
		<>
			<h2>{language.experience}</h2>
			<div className="line" />
			<div className="item">
				<h3>{experience.mate.title[language.language]}</h3>
				<p>{experience.mate.text[language.language]}</p>
				<p>{language.technologies}: React, PostgreSQL, Git</p>
			</div>
		</>
	);
}
