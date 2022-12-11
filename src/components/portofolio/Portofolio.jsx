import React from "react";
import "./portofolio.css";
import IMG1 from "../../assets/Portfolio.jpg";
import Portfolio from "../../assets/Portfolio-Bilge Bahar SAATÇİ.pdf";

import { GiArchiveResearch } from "react-icons/gi";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "My Projects",
  },
];
const Portofolio = () => {
  return (
    <section id="portofolio">
      <h5>My Recent Work can be found below</h5>
      <h2>Portfolio</h2>
      <div className="container portofolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portofolio__item">
              <div className="portofolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portofolio__item-cta">
                <a href={Portfolio} download className="btn">
                  Download
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portofolio;
