import React from 'react';
import "../homeworkcss/portfolio.css";

const portfolio = () => { return ( <section className="portfolio" id="portfolio"> <h2 className="portfolio-title">PORTFOLIO</h2> <p className="portfolio-subtitle">Lorem ipsum dolor sit amet consectetur</p>

    <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <h3>{project.title}</h3>
            <p className="portfolio-type">{project.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
    
    ); };
    
    export default portfolio;