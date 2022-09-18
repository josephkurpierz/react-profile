import React from "react";
import self from '../../assets/self.jpg'

function About() {
  return (
    <section className="about">
      <h2 className='section-header'>Who am I?</h2>
      <img src={self} style={{width:"30%"}} alt="Joe in blue shirt"/>
      <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
    </section>
  );
}

export default About;