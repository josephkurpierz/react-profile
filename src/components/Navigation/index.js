import React from "react";

function Nav(props) {
  const {
    categories =  [],
    setCurrentCategory,
    currentCategory,
  } = props;

  return(
    <nav id="nav">
      <ul>
      {categories.map((category) => (
        <li>
        <button 
          key={category.name}
          className={`${currentCategory.name  === category.name && 'navActive'}`}
        >
          <span onClick={() => setCurrentCategory(category)}>
            {category.name}
          </span>
        </button>
        </li>

      ))}
      </ul>
    </nav>
  )
}

export default Nav;