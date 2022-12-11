import React from "react";
import "./about.css";
// import ME from "../../assets/me-about.jpg";
import Bahar from "../../assets/Avatar2.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img className="about__me-Alex" src={Bahar} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Studies</h5>
              <small>Gebze Technical University</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Experience</h5>
              <small>Gathered through internships</small>
            </article>
          </div>
          <p>
            Hello, my name is Bilge Bahar Saatçi. I'm studying Architecture at
            the Technical University of Gebze in Istanbul. As an architecture
            student, I am a highly motivated and creative individual with a
            passion for designing and creating functional and aesthetically
            pleasing buildings and other structures. I have experience with a
            variety of design software and I have completed projects that
            demonstrate my ability to create innovative and practical designs.
            In addition, I have knowledge of building codes and regulations, and
            I am familiar with sustainable design principles and techniques. I
            am also a strong communicator and collaborator, with the ability to
            work effectively with clients and members of the design team. I am
            eager to apply my skills and knowledge to challenging design
            projects.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
