import { useState } from "react";
import "./App.css";
import profilePicture from "../pictures/profilePicture.png";
import linkedinLogo from "../pictures/linkedinLogo.png";
import githubLogo from "../pictures/githubLogo.png";
import bookmanager from "../pictures/bookmanager.png";
import bookshelf from "../pictures/bookshelf.png";
import Work from "./Work";
import Experience from "./Experience";
import AboutMe from "./AboutMe";

const words = {
    EN: {
        AboutMe: "ABOUT ME",
        work: "WORK",
        experience: "EXPERIENCE",
        darkMode: "DARK MODE",
        language: "EN",
        switchTo: "HU",
        website: "Website",
        technologies: "Used technologies",
        title: "CATCHY TEXT HERE",
    },
    HU: {
        AboutMe: "RÓLAM",
        work: "MUNKA",
        experience: "TAPASZTALAT",
        darkMode: "SÖTÉT MÓD",
        language: "HU",
        switchTo: "EN",
        website: "Weboldal",
        technologies: "Használt technológiák",
        title: "MENŐ SZÖVEG IDE",
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

const aboutMe = {
    type: "About Me",
    text: { EN: "Text about me", HU: "Rólam szöveg" },
};

function kekw(prop, language) {
    switch (prop) {
        default:
        case "Work":
            return <Work work={work} language={language} />;
        case "Experience":
            return <Experience experience={experience} language={language} />;
        case "About Me":
            return <AboutMe aboutMe={aboutMe} language={language} />;
    }
}

function App() {
    const [language, setLanguage] = useState(words["EN"]);
    const [tab, setTab] = useState("Work");

    return (
        <>
            <ul>
                <li
                    className="option"
                    onClick={() => {
                        setLanguage(words[language.switchTo]);
                    }}
                >
                    {language.switchTo}
                </li>
                <li className="option">{language.darkMode}</li>
                <li onClick={() => setTab("About Me")}>{language.AboutMe}</li>
                <li onClick={() => setTab("Experience")}>
                    {language.experience}
                </li>
                <li onClick={() => setTab("Work")}>{language.work}</li>
            </ul>
            <div className="content">
                <div className="profile">
                    <img src={profilePicture} alt="Profile" />
                    <h3>{language.title}</h3>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/rich%C3%A1rd-nagy-320285201/">
                            <img src={linkedinLogo} alt="LinkedInIcon" />
                        </a>
                        <a href="https://github.com/richard-nagy">
                            <img src={githubLogo} alt="GitHubIcon" />
                        </a>
                    </div>
                    <p>nagy.richard0630@gmail.com</p>
                    <p>+36 20 237 1090</p>
                    <p>Richárd Nagy</p>
                </div>
                {kekw(tab, language)}
            </div>
        </>
    );
}

export default App;
