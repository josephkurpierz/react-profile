import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
import About from "./components/About";
import ContactForm from "./components/Contact";

function App() {
  const [categories] = useState([
    { name: "About" },
    { name: "Contact" },
    { name: "Projects" },
    { name: "Resume" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div id="app">
      <header id="header">
        <Header
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        ></Header>
      </header>
      <main className="pages">
        <About></About>
        <Project></Project>
        <ContactForm></ContactForm>
      </main>

      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
