import { useEffect, useState } from "react";
import "../styles/App.scoped.css";
import profilePicture from "../pictures/profilePicture.png";
import bookmanager from "../pictures/bookmanager.png";
import bookshelf from "../pictures/bookshelf.png";
import Work from "./Work";
import Experience from "./Experience";
import AboutMe from "./AboutMe";
import useLocalStorage from "use-local-storage";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const img = new Image();
img.src = profilePicture;

const words = {
	EN: {
		AboutMe: "ABOUT ME",
		work: "WORK",
		experience: "EXPERIENCE",
		darkMode: "DARK MODE",
		lightMode: "LIGHT MODE",
		language: "EN",
		switchTo: "HU",
		website: "Website",
		technologies: "Used technologies",
		title: "MY NAME IS RICHÁRD AND I LIKE TO CODE.",
	},
	HU: {
		AboutMe: "RÓLAM",
		work: "MUNKA",
		experience: "TAPASZTALAT",
		darkMode: "SÖTÉT MÓD",
		lightMode: "VILÁGOS MÓD",
		language: "HU",
		switchTo: "EN",
		website: "Weboldal",
		technologies: "Használt technológiák",
		title: "A NEVEM RICHÁRDS ÉS SZERETEK KÓDOLNI.",
	},
};

const work = {
	type: "WORK",
	content: {
		BookShelf: {
			text: {
				EN: "Website to keep track of the readen books.",
				HU: "Weboldal elolvasott könyvek számon tartásához.",
			},
			title: "BookShelf",
			img: bookshelf,
			github: "https://github.com/richard-nagy/BookShelf",
			website: "https://richard-nagy.github.io/BookShelf/",
			technologies: "React, SASS, Firebase Realtime Database",
		},
		BookManager: {
			text: {
				EN: "Website to manage database about books.",
				HU: "Weboldal könyvekkel foglalkozó adatbázis kezeléséhez.",
			},
			title: "BookManager",
			img: bookmanager,
			github: "https://github.com/richard-nagy/BookManager",
			website: "",
			technologies: "React, Redux, MySQL, Axios",
		},
	},
};

const experience = {
	type: "EXPERIENCE",
	content: {
		MATE: {
			text: {
				EN: "Website to keep track of the readen books.",
				HU: "Weboldal elolvasott könyvek számon tartásához.",
			},
			title: "MATE",
			technologies: "React, SASS, Firebase Realtime Database",
		},
	},
};

function switcher(prop, language) {
	switch (prop) {
		default:
		case "Work":
			return <Work work={work} language={language} />;
		case "Experience":
			return <Experience experience={experience} language={language} />;
		case "AboutMe":
			return <AboutMe language={language.language} />;
	}
}

function App() {
	const [language, setLanguage] = useState(words["EN"]);
	const [tab, setTab] = useState(null);
	const [loaded, setLoaded] = useState(false);

	const defaultDark = window.matchMedia("(data-theme: dark)").matches;
	const [theme, setTheme] = useLocalStorage(
		"theme",
		defaultDark ? "dark" : "light"
	);

	img.onload = () => {
		console.log("ready");
		setLoaded(true);
	};

	return (
		<div className="body" data-theme={theme}>
			{loaded && (
				<div className="app">
					<ul>
						<li onClick={() => setTab("Work")}>{language.work}</li>
						<li onClick={() => setTab("Experience")}>
							{language.experience}
						</li>
						<li onClick={() => setTab("AboutMe")}>
							{language.AboutMe}
						</li>
						<li className="option">
							<p
								onClick={() => {
									setLanguage(words[language.switchTo]);
								}}
							>
								{language.switchTo}
							</p>
							<p
								onClick={() => {
									const newTheme =
										theme === "light" ? "dark" : "light";
									setTheme(newTheme);
								}}
							>
								{theme === "light"
									? language.darkMode
									: language.lightMode}
							</p>
						</li>
					</ul>
					<div className="content">
						<div className="leftBar">
							<div className="profile">
								<img
									src={profilePicture}
									alt="Profile"
									onLoad={() => setLoaded(true)}
								/>
								<h3>{language.title}</h3>
								<div className="icons">
									<a href="https://github.com/richard-nagy">
										<AiFillGithub />
									</a>
									{/* <a href="">
										<AiFillLinkedin />
									</a> */}
								</div>
								<p>nagy.richard0630@gmail.com</p>
								<p>+36 20 237 1090</p>
								<p>Richárd Nagy</p>
							</div>
						</div>
						<div className="items">{switcher(tab, language)}</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
