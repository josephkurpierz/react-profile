import React from "react";
import {FaLinkedin, FaGithub} from 'react-icons/fa';

function Footer() {
  return (
    <section className="footer">
      <span className="git-hub"><a href="https://github.com/josephkurpierz" target="_blank" rel='noreferrer'><FaGithub/></a> </span>
      <span className="linked-in"><a href="https://www.linkedin.com/in/joseph-kurpierz-b3097359/" target="_blank" rel='noreferrer'><FaLinkedin/></a> </span>
      <span className="signature">
        &copy; 2022 Joseph Kurpierz
      </span>
    </section>
  );
}

export default Footer;
