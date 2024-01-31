import React from "react";
import projectImage1 from "../../assets/Large/RichPortfolio.png";

const Portfolio = () => {
  const projects = [
    {
      title: "Rich Portfolio",
      description:
        "Rich Portfolio seamlessly integrates the networking prowess of LinkedIn with the collaborative coding environment of GitHub, offering tech professionals a one-stop solution for networking, collaboration, and career advancement. With Rich Portfolio, connecting with peers, working on projects, and propelling your career forward has never been easier or more efficient.      ",
      image: projectImage1,
      link: "https://rich-portfolio-5sb7.onrender.com/",
    },
  ];

  return (
    <section className="tab-content my-5">
      <div className="flex-row">
        <h1 className="section-title primary-border">Portfolio</h1>
      </div>
      <div className="flex-row">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} />
            </a>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {/* Add more details or links if needed */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
