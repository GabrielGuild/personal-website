import React from "react";
import sabrina from "./Pictures/Sabrina.png";
import fitness from "./Pictures/fitness.png";
import kevins from "./Pictures/Kevins.png";

const Experience =() => {

return (
    <div className="Experiance-wrapper">
        <div className="item">
        <img className="picture" src={sabrina} alt=""/>
        <div className="explanation">

        <a href="https://sabrinaguild.onrender.com">sabrinaguild</a>
        <p>Produced full API utilizing Postgres and SQL to serve and house data for front-end use
            Utilized React to enhance user experience, responsiveness, and browser compatibility
            Technologies used: </p>
        </div>
        </div>
        <div className="item">
        <img className="picture" src={fitness} alt=""/>
        <div className="explanation">
        <a href="https://kevins-woodworking.onrender.com">Kevins woodworking webstore and application
        </a>
        <p>Collaborated with a team of 3 other remote developers to deploy project in a 4 week sprint 
            Built out backend components using SQL queries for a responsive API
            Designed the animations and styling for the frontend and polish the UX including resizing for mobile use 
            Created API requests for first prototyping future requests to incorporate a responsive design
            Technologies used: AJAX, PostgreSQL, Docker, Heroku, Render, React, Git, JavaScript </p>
        </div>

        </div>
        <div className="item">
        <img className="picture" src={kevins} alt=""/>
        <div className="explanation">

        <a href="https://fitness-track-er.onrender.com">sabrinaguild</a>
        <p>I built out much of the Backend contributing largely to the our users pathing and activities functions 
            Created the templates to a fitness site’s community and ecosystem
            Provided  much of the styling for the face of the site in coordination with the teams vision 

</p>
        </div>
        </div>
    </div>
)
}
export default Experience;