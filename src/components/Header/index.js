import React from "react";
import Nav from "../Navigation";

function Header(props) {
  const {
    categories =  [],
    setCurrentCategory,
    currentCategory,
  } = props;
  return (
    <section>
      <div className="title">
        <h1>Joseph Kurpierz</h1>
      </div>
      <Nav
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
          ></Nav>
    </section>
  );
}

export default Header;
