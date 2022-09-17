//import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Navigation";
import Project from "./components/Project";

function App() {
  return (
    <body>
      <div className="App">
        <header className="header">
          <Header />
        </header>
          <Nav />
        <section>
          {/* if project/about/contact/resume clicked */}
          <Project />
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </body>
  );
}

export default App;
