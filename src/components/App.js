import { useState } from "react";
import "../styles/App.scoped.css";
import profilePicture from "../pictures/profilePicture.png";
import Work from "./Work";
import Experience from "./Experience";
import AboutMe from "./AboutMe";
import useLocalStorage from "use-local-storage";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const img = new Image();
img.src = profilePicture;

const words = {
	EN: {
		aboutMe: "ABOUT ME",
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
		aboutMe: "RÓLAM",
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

function switcher(prop, language) {
	switch (prop) {
		default:
		case "Work":
			return <Work language={language} />;
		case "Experience":
			return <Experience language={language} />;
		case "AboutMe":
			return <AboutMe language={language} />;
	}
}

function App() {
	const [language, setLanguage] = useState(words["EN"]);
	const [tab, setTab] = useState(null);
	const [loaded, setLoaded] = useState(false);

	const defaultDark = window.matchMedia("(data-theme: dark)").matches;
	const [theme, setTheme] = useLocalStorage("theme", defaultDark ? "dark" : "light");

	img.onload = () => {
		setLoaded(true);
	};

	return (
		<div className="body" data-theme={theme}>
			{loaded && (
				<div className="app">
					<ul>
						<li onClick={() => setTab("Work")}>{language.work}</li>
						<li onClick={() => setTab("Experience")}>{language.experience}</li>
						<li onClick={() => setTab("AboutMe")}>{language.aboutMe}</li>
						<div>
							<li
								className="option"
								onClick={() => {
									setLanguage(words[language.switchTo]);
								}}
							>
								{language.switchTo}
							</li>
							<li
								className="option"
								onClick={() => {
									const newTheme = theme === "light" ? "dark" : "light";
									setTheme(newTheme);
								}}
							>
								{theme === "light" ? language.darkMode : language.lightMode}
							</li>
						</div>
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
									<a href="https://www.linkedin.com/in/richardnagy0630">
										<AiFillLinkedin />
									</a>
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
