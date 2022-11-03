import React from "react";
import self from '../../assets/self.jpg'

function About() {
  return (
    <section className="about">
      <h2 className='section-title'>Who am I?</h2>
      <img src={self} style={{width:"30%"}} className="profile-pic" alt="Joe in blue shirt"/>
      <p>Full stack web developer leveraging a background in pharmaceuticals and data analysis to focus
on data integrity. Recently earned a certificate in full stack web development from the University
of Minnesota, with newly developed skills in JavaScript, CSS, React.js, MongoDB, SQL, and
responsive web design. Known as an innovative problem solver that is always looking for ways
to improve processes and boost efficiency. Each project presents an opportunity to learn
something new. Recently worked on a team of four to develop a single-page MERN app that
connects users to handyman providers. I am excited to test and grow my skills as part of a
fast-paced, quality-driven team to build better experiences on the web.
</p>
    </section>
  );
}

export default About;