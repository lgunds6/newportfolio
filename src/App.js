import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.js";
import Nav from "./Nav.js";
import Footer from "./Footer.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Projects from "./pages/Projects.js";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="AppContainer">
        <div className="contentContainer">
          <div className="pageContainer">
            <nav className="navBarContainer">
              <ul className="navBar">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
          <Footer></Footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
