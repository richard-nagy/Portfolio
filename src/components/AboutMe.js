const aboutMe = {
	myself: {
		title: {
			EN: "MYSELF",
			HU: "ÉN MAGAM",
		},
		text: {
			EN: (
				<>
					I'm a self taught Junior React Developer or at least I like
					to think I am. I finished my studies on Software Information
					Technology, and currently learning React in my free time.
					Although I don't offer a lot of experience from my side, I
					am passionately learning, and my long time plan is to become
					a full time react developer.
					<br />
					As for my hobbies, I like to play video games, read books,
					and spend time with my dog.
					{/* <br />
						<br />
						<a href="">Download Resume</a> */}
				</>
			),
			HU: (
				<>
					Öntanított Junior React Fejlesztő vagyok vagy legalább is az
					szeretnék lenni. A tanulmányaimat Programtervező
					Informatikus szakon végeztem, jelen pillanatban pedig a
					szabadidőmben Reactot tanulok. Annak ellenére hogy a
					részemről nem tudok sok tapasztalatot felkínálni, lelkesen
					tanulok, és a hoszú távú tervem az hogy egy nap React
					fejlesztő legyek.
					<br />
					Hogy a hobbiaimat is megemlítsem, szeretek videójátékokkal
					játszani, könyvet olvasni, és a kutyámmal együtt időt
					eltölteni.
					{/* <br />
						<br />
						<a href="">Önéletrajz letöltése</a> */}
				</>
			),
		},
	},
	abilities: {
		title: {
			EN: "ABILITIES",
			HU: "KÉPESSÉGEK",
		},
		text: {
			EN: (
				<>
					Web Technologies: <br />
					<b>Javascript, ReactJS, HTML, CSS</b>
					<br />
					<br />
					Databases:
					<br />
					<b>MySQL</b>
					<br />
					<br />
					Tools and Platforms:
					<br />
					<b>Git, VSCode</b>
				</>
			),
			HU: (
				<>
					Web Technológiák: <br />
					<b>Javascript, ReactJS, HTML, CSS</b>
					<br />
					<br />
					Adatbázisok:
					<br />
					<b>MySQL</b>
					<br />
					<br />
					Eszközök és Platformok:
					<br />
					<b>Git, VSCode</b>
				</>
			),
		},
	},
};

export default function AboutMe({ language }) {
	return (
		<>
			<h2>{language.aboutMe}</h2>
			<div className="line" />

			<div className="item">
				<h3>{aboutMe.myself.title[language.language]}</h3>
				<p>{aboutMe.myself.text[language.language]}</p>
			</div>

			<div className="item">
				<h3>{aboutMe.abilities.title[language.language]}</h3>
				<p>{aboutMe.abilities.text[language.language]}</p>
			</div>
		</>
	);
}
