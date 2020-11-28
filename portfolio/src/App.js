import { useState } from "react";
import { Link } from "react-router-dom";

import './css/App.css';
import './css/main.css';

function App() 
{
    const [about, setAbout] = useState(true);
    const [project, setProject] = useState(false);
    const [contact, setContact] = useState(false);

    const handleAboutClick = () =>
    {
        setAbout(true);
        setProject(false);
        setContact(false);
    }

    const handleProjectClick = () =>
    {
        setAbout(false);
        setProject(true);
        setContact(false);
    }

    const handleContactClick = () =>
    {
        setAbout(false);
        setProject(false);
        setContact(true);
    }

    return (
        <div>
            <h1 className="title">Joshua Chiang</h1>
            <span className="navbar">
                <p className="nav" onClick={handleAboutClick}>About Me</p>
                <p className="nav" onClick={handleProjectClick}>My Projects</p>
                <p className="nav" onClick={handleContactClick}>Contact Info</p>
            </span>
            <hr />
        </div>
    );
}

export default App;
