import React from "react";
import profileImage from "./assets/Large/Profile Picture.jpg";

function About() {
    return (
        <section id="about-me" className="my-5 intro">
            <div className="flex-row">
                <h1 id="about" className="section-title primary-border">About Me</h1>
            </div>
            <div className="flex-row">
                <div className="intro-info">
                    <div className="intro-img">
                        <img src={profileImage} alt="Profile of the developer" />
                    </div>
                    <p>
                        I am a Full Stack Web Developer with a background in Graphic Design. I have a passion for learning and problem-solving. I am a team player and excited to bring my skills to a team that values collaboration and innovation.
                    </p>
                    <p>
                        I am a graduate of the Michigan State University Coding Bootcamp. I have experience in HTML, CSS, JavaScript, jQuery, Node.js, Express.js, MySQL, MongoDB, Handlebars.js, React.js, and more.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
