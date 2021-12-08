import { useState } from "react";
import "./App.css";
import profilePicture from "../pictures/profilePicture.png";
import linkedinLogo from "../pictures/linkedinLogo.png";
import githubLogo from "../pictures/githubLogo.png";
import bookmanager from "../pictures/bookmanager.png";
import bookshelf from "../pictures/bookshelf.png";
import Work from "./Work";

const words = {
    EN: {
        etc: "ETC",
        work: "WORK",
        experience: "EXPERIENCE",
        darkMode: "DARK MODE",
        language: "EN",
        switchTo: "HU",
        website: "Website",
        technologies: "Used technologies",
    },
    HU: {
        etc: "EGYÉB",
        work: "MUNKA",
        experience: "TAPASZTALAT",
        darkMode: "SÖTÉT MÓD",
        language: "HU",
        switchTo: "EN",
        website: "Weboldal",
        technologies: "Használt technológiák",
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

function App() {
    const [language, setLanguage] = useState(words["EN"]);

    return (
        <>
            <ul>
                <li
                    className="option"
                    onClick={() => setLanguage(words[language.switchTo])}
                >
                    {language.switchTo}
                </li>
                <li className="option">{language.darkMode}</li>
                <li>{language.etc}</li>
                <li>{language.experience}</li>
                <li>{language.work}</li>
            </ul>
            <div className="content">
                <div className="profile">
                    <img src={profilePicture} alt="Profile" />
                    <h3>CATCHY TEXT HERE</h3>
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
                <Work object={{ work: work, language: language }} />
            </div>
        </>
    );
}

export default App;
