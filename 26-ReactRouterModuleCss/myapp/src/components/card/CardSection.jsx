import React from "react";
import "./CardSection.css";


const CardSection = () => {
    return (
      <section className="card-section">
        <div className="card">
          <h2>Basic Plan</h2>
          <ul>
            <li>Feature one</li>
            <li>Feature two</li>
            <li>Feature three</li>
            <li>Feature four</li>
            <li>Feature five</li>
            <li>Feature six</li>
            <li>Feature seven</li>
            <li>Feature eight</li>
          </ul>
          <button>Choose Plan</button>
        </div>
  
        <div className="card">
          <h2>Pro Plan</h2>
          <ul>
            <li>Feature one</li>
            <li>Feature two</li>
            <li>Feature three</li>
            <li>Feature four</li>
            <li>Feature five</li>
            <li>Feature six</li>
            <li>Feature seven</li>
            <li>Feature eight</li>
          </ul>
          <button>Choose Plan</button>
        </div>
  
        <div className="card">
          <h2>Enterprise Plan</h2>
          <ul>
            <li>Feature one</li>
            <li>Feature two</li>
            <li>Feature three</li>
            <li>Feature four</li>
            <li>Feature five</li>
            <li>Feature six</li>
            <li>Feature seven</li>
            <li>Feature eight</li>
          </ul>
          <button>Choose Plan</button>
        </div>
      </section>
    );
  };
  

export default CardSection;
