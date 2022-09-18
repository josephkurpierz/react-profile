import React from "react";
import parkour from "../../assets/projects/Parkour-landing-page.png";
import pizza from "../../assets/projects/pizza-hunt-landing-page.png";
import photoPort from "../../assets/projects/photo-port-landing-page.png";
import zooKeepr from "../../assets/projects/zookeepr-landing-page.png";
import dogs from "../../assets/projects/dogs-dogs-dogs-landing-page.png";

function Project() {
  const projects = [
    {
      name: "Parkour",
      thumbnail: parkour,
      repo: "https://github.com/josephkurpierz/parkour",
      deployed: "https://parkour-review.herokuapp.com/",
    },
    {
      name: "Pizza Hunt",
      thumbnail: pizza,
      repo: "https://github.com/josephkurpierz/pizza-hunt",
      deployed: "https://nameless-shore-70920.herokuapp.com/",
    },
    {
      name: "Photo Portfolio",
      thumbnail: photoPort,
      repo: "https://github.com/josephkurpierz/photo-port",
      deployed: "https://josephkurpierz.github.io/photo-port/",
    },
    {
      name: "Zoo Keepr",
      thumbnail: zooKeepr,
      repo: "https://github.com/josephkurpierz/zookeepr",
      deployed: "https://fast-sea-99289.herokuapp.com/",
    },
    {
      name: "Dogs-Dogs-Dogs",
      thumbnail: dogs,
      repo: "https://github.com/josephkurpierz/dogs-dogs-dogs",
      deployed: "https://taylorstrubhar.github.io/dogs-dogs-dogs/",
    },
  ];
  return (
    <section>
      <h2 className="section-title">My Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div className="project-card" key={project.name}>
              <a className='links' href={project.repo}>{project.name}</a><br/>
              <a className='links'href={project.deployed}>Live deployment</a>
            <div
              className="project-img"
              style={{ backgroundImage: `url(${project.thumbnail})` }}
            >
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
