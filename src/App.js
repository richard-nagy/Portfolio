import { useState } from "react";
import "./App.css";

const words = {
    EN: {
        etc: "ETC",
        work: "WORK",
        experience: "EXPERIENCE",
        language: "HU",
    },
    HU: {
        etc: "STB",
        work: "MUNKA",
        experience: "TAPASZTALAT",
        language: "EN",
    },
};

function App() {
    const [language, setLanguage] = useState("EN");

    return (
        <div className="body">
            <ul>
                <li onClick={() => setLanguage("HU")}>
                    {words[language].language}
                </li>
                <li>{words[language].etc}</li>
                <li>{words[language].work}</li>
                <li>{words[language].experience}</li>
            </ul>
        </div>
    );
}

export default App;
