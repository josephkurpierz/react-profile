import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Navigation";
import Project from "./components/Project";
import About from "./components/About";
import ContactForm from "./components/Contact";

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    { name: "About" },
    { name: "Contact" },
    { name: "Projects" },
    { name: "Resume" },
  ]);

  const { currentCategory, setCurrentCategory } = useState(categories[0]);

  return (
    <div id="app">
      <header id="header">
        <Header>
          <Nav
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
          ></Nav>
        </Header>
      </header>
      <main className="pages">
        {!contactSelected ? (
          <>
            <Project></Project>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
