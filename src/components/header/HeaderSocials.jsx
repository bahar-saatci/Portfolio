import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/bilge-bahar-saat%C3%A7i-92205418b/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
    </div>
  );
};

export default HeaderSocials;

// <a href="https://github.com/Manea-Alex" target="_blank">
//   <FaGithub />
// </a>
// <a href="https://dribble.com" target="_blank">
//   <FiDribbble />
// </a>
