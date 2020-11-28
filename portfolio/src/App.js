import { Link } from "react-router-dom";

import './css/App.css';
import './css/main.css';

function App() 
{
    return (
        <div>
            <h1 className="title">Joshua Chiang</h1>
            <span className="navbar">
                <p className="nav">About Me</p>
                <p className="nav">My Projects</p>
                <p className="nav">Contact Info</p>
            </span>
            <hr />
        </div>
    );
}

export default App;
