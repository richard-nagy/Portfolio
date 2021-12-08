import { useState } from "react";
import "./App.css";
import profilePicture from "./pictures/profilePicture.png";
import linkedinLogo from "./pictures/linkedinLogo.png";
import githubLogo from "./pictures/githubLogo.png";

const words = {
    EN: {
        etc: "ETC",
        work: "WORK",
        experience: "EXPERIENCE",
        switchTo: "HU",
    },
    HU: {
        etc: "STB",
        work: "MUNKA",
        experience: "TAPASZTALAT",
        switchTo: "EN",
    },
};

function App() {
    const [language, setLanguage] = useState("EN");

    return (
        <>
            <ul>
                <li onClick={() => setLanguage(words[language].switchTo)}>
                    {words[language].switchTo}
                </li>
                <li>{words[language].etc}</li>
                <li>{words[language].work}</li>
                <li>{words[language].experience}</li>
            </ul>
            <div className="content">
                <div className="profile">
                    <img src={profilePicture} />
                    <h3>CATCHY TEXT HERE</h3>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/rich%C3%A1rd-nagy-320285201/">
                            <img src={linkedinLogo} />
                        </a>
                        <a href="https://github.com/richard-nagy">
                            <img src={githubLogo} />
                        </a>
                    </div>
                    <p>nagy.richard0630@gmail.com</p>
                    <p>+36 20 237 1090</p>
                    <p>Richárd Nagy</p>
                </div>
                <div className="items">
                    <h2>ITEMS</h2>
                    <div className="line"></div>
                    <div className="item">
                        <h3>Title</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Praesent urna nibh, pulvinar sed sollicitudin
                            sed, pretium id ex. Cras mattis velit vel nisi
                            pulvinar porta.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
