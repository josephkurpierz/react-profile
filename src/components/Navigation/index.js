import React from "react";

function Nav(props) {
  const {
    categories =  [],
    setCurrentCategory,
    currentCategory,
  } = props;
console.log(props);
console.log('console.log is not working');
  return(
    
    <nav id="nav">
      {categories.map((category) => (
        
        <button 
          key={category.name}
          className={`${currentCategory.name  === category.name && 'navActive'} btn`} 
        >
          <span onClick={() => setCurrentCategory(category)}>
            {category.name}
          </span>
        </button>

      ))}
    </nav>
    
  )
}

export default Nav;