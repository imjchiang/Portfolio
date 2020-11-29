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
    <>
        <div className="cat">
            <h2>Skills</h2>
            <h3>Programming Languages</h3>
            <div className="subcat">
                <div className="info">
                    <li>HTML / CSS / JavaScript</li>
                    <li>Python</li>
                    <li>C++ (fundamentals)</li>
                </div>
                <div className="info">
                    <li>Java (fundamentals)</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                </div>
            </div>

            <h3>Modern Frameworks</h3>
            <div className="subcat">
                <div className="info">
                    <li>React</li>
                    <li>Node.js</li>
                </div>
                <div className="info">
                    <li>Django</li>
                    <li>Express</li>
                </div>
            </div>

            <h3>Data Storage and Extraction</h3>
            <div className="subcat">
                <div className="info">
                    <li>RESTful APIs ( use / create )</li>
                </div>
                <div className="info">
                    <li>Web Scraping</li>
                </div>
            </div>

            <h3>Version Control and Testing</h3>
            <div className="subcat">
                <div className="info">
                    <li>GitHub / git</li>
                    <li>Jupyter Notebooks</li>
                </div>
                <div className="info">
                    <li>unittest</li>
                </div>
            </div>
        </div>

        <div className="cat">
            <h2>Work Experience</h2>
            <h3>UCLA Health - Care Extenders / Department Coordinator (Santa Monica Hospital - Neonatal Intensive Care Unit)</h3>
            <div className="subcat">
                <div>
                    <p>August 2019 - November 2020,  LOS ANGELES</p>
                    <p>Fulfill responsibilities such as: scheduling shifts, making rounds, admit/interview/orient new CEs (Care Extenders), develop improvements to the program, communicate and coordinate with hospital staff.</p>
                </div>
            </div>

            <h3>UCLA Health - Care Extenders / Volunteer</h3>
            <div className="subcat">
                <div>
                    <p>August 2018 - November 2020,  LOS ANGELES</p>
                    <p>Assisted patients at the hospital to make them feel at ease and comfortable throughout their entire treatment or stay.</p>
                    <p>Fulfill responsibilities such as: making rounds on patients, assisting nurses and care partners, restocking medical supplies, delivering and picking lab samples and materials, and disinfecting the unit.</p>
                </div>
            </div>

            <h3>UCLA - Learning Assistants / Pedagogy Head Learning Assistant</h3>
            <div className="subcat">
                <div>
                    <p>January 2020 - March 2020,  LOS ANGELES</p>
                    <p>Familiarized new learning assistants with the ideologies practiced by learning assistants in teaching and interacting with other students.</p>
                    <p>Led meetings to teach learning assistants on how to address and reach out to students while applying the inclusive teaching practices and experimentally proven teaching strategies.</p>
                    <p>Observed learning assistants and gave feedback on how their teaching practices and application of teaching strategies could be improved.</p>
                </div>
            </div>

            <h3>UCLA - Learning Assistants / Learning Assistant</h3>
            <div className="subcat">
                <div>
                    <p>January 2018 - March 2020,  LOS ANGELES</p>
                    <p>Enhanced education through the use of inclusive teaching practices and experimentally proven teaching strategies and assist students through the redirecting of questions to foster thinking and reflecting to promote understanding and a growth mindset among students in STEM fields. </p>
                </div>
            </div>
        </div>
        
        <div className="cat">
            <h2>Education</h2>
            <h3>General Assembly - Software Engineering Immersive</h3>
            <div className="subcat">
                <div>
                    <p>July 2020 - October 2020, San Francisco</p>
                    <p>Participated in a full-time immersive Software Engineering course, completing in-class projects, hackathons, and personal projects focused on real-world applications of software engineering principles and best practices.</p>
                </div>
            </div>

            <h3>University of California, Los Angeles (UCLA) - Biochemistry, B.S. (GPA: 3.6)</h3>
            <div className="subcat">
                <div>
                    <p>September 2016 - June 2020, Los Angeles</p>
                    <p>Dean’s Honor List: Winter 2017, Spring 2017, Fall 2017, Winter 2018, Fall 2018</p>
                </div>
            </div>
        </div>
    </>
    
    const myProjects =
        <div className="info">
            <h2>Balloon Bomber</h2>
            <h2>lolinfo</h2>
            <h2>exitcodeZero</h2>
            <h2>Ride or Share</h2>
            <h2>rKD</h2>
        </div>
    
    const contactInfo =
        <div className="info">
            <h2>LinkedIn</h2>
            <h2>GitHub</h2>
            <h2>Resume Here</h2>
        </div>

    return (
        <div>
            <h1 className="title">Joshua Chiang</h1>
            <span className="navbar">
                {
                    about
                    ?
                    <p className="nav-true">About Me</p>
                    :
                    <p className="nav" onClick={handleAboutClick}>About Me</p>
                }
                {
                    project
                    ?
                    <p className="nav-true">My Projects</p>
                    :
                    <p className="nav" onClick={handleProjectClick}>My Projects</p>
                }
                {
                    contact
                    ?
                    <p className="nav-true">Contact Info</p>
                    :
                    <p className="nav" onClick={handleContactClick}>Contact Info</p>
                }
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
