import "../App.css";

function Projects() {
  const Project1 = () => (
    <img
      src="./stnadAloneImg.png"
      width="100"
      height="100"
      className="swim__img"
      alt="travel"
    />
  );
  const Project2 = () => (
    <img
      src="./stnadAloneImg.png"
      width="100"
      height="100"
      className="swim__img"
      alt="travel"
    />
  );
  const Project3 = () => (
    <img
      src="./stnadAloneImg.png"
      width="100"
      height="100"
      className="swim__img"
      alt="travel"
    />
  );
  const Project4 = () => (
    <img
      src="./stnadAloneImg.png"
      width="100"
      height="100"
      className="swim__img"
      alt="travel"
    />
  );
  return (
    <>
      <div className="projectsContainer">
        <div className="headerStyle">
          <h3> &lt; projects &gt;</h3>
        </div>

        <div className="p1">
          <div className="projectGroup">
            <Project1 />
            <a
              className="resumeLink"
              href="https://delivery-estimate-app.netlify.app"
            >
              &lt;delivery-estimate-app&gt;
            </a>
            <a
              className="resumeLink"
              href="https://github.com/lgunds6/TranslationEstimateApp"
            >
              &lt;GitHub Link&gt;
            </a>
            <p>
              {" "}
              Built an app that allows the user to calculatethe delivery
              esitmate based on multiple selections.
            </p>
          </div>
          <div className="projectGroup">
            <Project2 />
            <a
              className="resumeLink"
              href="https://hangtenboards.herokuapp.com/"
            >
              &lt; Hang Ten Marketplace&gt;
            </a>
            <a className="resumeLink" href="https://github.com/lgunds6/HangTen">
              &lt;GitHub Link&gt;
            </a>
            <p>
              {" "}
              Built a full CRUD app using Ruby on Rails, React and PostGreSQL
            </p>
          </div>
        </div>
        <div className="p1">
          <div className="projectGroup">
            <Project2 />
            <a
              className="resumeLink"
              href="https://hangtenboards.herokuapp.com/"
            >
              &lt; Portfolio Website&gt;
            </a>
            <a className="resumeLink" href="https://github.com/lgunds6/HangTen">
              &lt;GitHub Link&gt;
            </a>
            <p> My portfolio website is built using react.js</p>
          </div>
          <div className="projectGroup">
            <Project3 />
            <a
              className="resumeLink"
              href="http://damp-springs-91996.herokuapp.com/"
            >
              &lt;Group marketplace&gt;
            </a>
            <a
              className="resumeLink"
              href="https://github.com/jacobknighj12/whatJob"
            >
              &lt;GitHub Link&gt;
            </a>
            <p>
              {" "}
              As a group we built a CRUD app called WhatJob. This app was built
              to allow school leavers to search for specific jobs and obtain a
              greater understanding of what a day in the ife looks like.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
