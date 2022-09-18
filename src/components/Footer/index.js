import React from "react";
import {FaLinkedin, FaGithub} from 'react-icons/fa';

function Footer() {
  return (
    <section className="footer">
      <span className="git-hub"><a href="https://github.com/josephkurpierz"><FaGithub/></a> </span>
      <span className="linked-in"><a href="https://www.linkedin.com/in/joseph-kurpierz-b3097359/"><FaLinkedin/></a> </span>
      <span className="signature">
        <p> &copy; 2022 Joseph Kurpierz</p>
      </span>
    </section>
  );
}

export default Footer;
