import React from "react";

function Nav() {
  return(
    <section>
      <div>
        <ul>
          <li>
            <button className="btn">About</button>
          </li>
          <li>
            <button className="btn">Contact</button>
          </li>
          <li>
            <button className="btn">Projects</button>
          </li>
          <li>
            <button className="btn">Resume</button>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Nav;