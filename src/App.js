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
            <div className="content">
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
        </div>
    );
}

export default App;
