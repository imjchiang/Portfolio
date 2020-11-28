import { useState } from "react";

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

    const aboutMe =
        <div>
            <h2>Skills</h2>
            <h2>Work Experience</h2>
            <h2>Education</h2>
        </div>
    
    const myProjects =
        <div>
            <h2>Balloon Bomber</h2>
            <h2>lolinfo</h2>
            <h2>exitcodeZero</h2>
            <h2>Ride or Share</h2>
            <h2>rKD</h2>
        </div>
    
    const contactInfo =
        <div>
            <h2>LinkedIn</h2>
            <h2>GitHub</h2>
            <h2>Resume Here</h2>
        </div>

    return (
        <div>
            <h1 className="title">Joshua Chiang</h1>
            <span className="navbar">
                <p className="nav" onClick={handleAboutClick}>About Me</p>
                <p className="nav" onClick={handleProjectClick}>My Projects</p>
                <p className="nav" onClick={handleContactClick}>Contact Info</p>
            </span>
            <hr />

            {
                about
                ?
                aboutMe
                :
                <></>
            }

            {
                project
                ?
                myProjects
                :
                <></>
            }

            {
                contact
                ?
                contactInfo
                :
                <></>
            }

        </div>
    );
}

export default App;
