import logo from "./logo.svg";

import "./App.css";

function Footer() {
  return (
    <>
      <div className="footerContainer">
        <div className="copyStyles">
          <p>&copy; 2022 Luke Gunders</p>
        </div>
        <div className="socialsLinks">
          <ul className="socialsBar">
            <li>
              <a href="https://www.linkedin.com/in/luke-gunders/">
                &lt;LinkedIn&gt;
              </a>
            </li>
            <li>
              <a href="https://github.com/lgunds6/">&lt;GitHub&gt;</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
