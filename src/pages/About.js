import "../App.css";

function About() {
  const Image1 = () => (
    <img
      src="./1.png"
      width="600"
      height="300"
      className="about__Image"
      alt="travel"
    />
  );

  const Image2 = () => (
    <img
      src="./2.png"
      width="600"
      height="300"
      className="about__Image"
      alt="travel"
    />
  );

  const Image3 = () => (
    <img
      src="./3.png"
      width="600"
      height="300"
      className="about__Image"
      alt="travel"
    />
  );
  const Image4 = () => (
    <img
      src="./4.png"
      width="600"
      height="300"
      className="about__Image"
      alt="travel"
    />
  );

  const Image5 = () => (
    <img
      src="./5.png"
      width="600"
      height="300"
      className="about__Image"
      alt="travel"
    />
  );

  const Image6 = () => (
    <img
      src="./6.png"
      width="600"
      height="300"
      className="about__Image"
      alt="travel"
    />
  );
  const Image7 = () => (
    <img
      src="./7.png"
      width="600"
      height="300"
      className="about__Image"
      alt="travel"
    />
  );
  const Image8 = () => (
    <img
      src="./8.png"
      width="600"
      height="300"
      className="about__Image"
      alt="travel"
    />
  );
  const HeroImage = () => (
    <img
      src="./stnadAloneImg.png"
      width="200"
      height="100"
      className="about__Image"
      alt="travel"
    />
  );

  return (
    <>
      <div className="pageContainer">
        <div className="hero">
          <HeroImage></HeroImage>
          <h3 className="introStyle"> &lt; personal life &gt;</h3>
        </div>
        <div className="imageContainer">
          <div className="travel">
            <Image1 />
            <h4> &lt; travel &gt;</h4>
            <p>
              {" "}
              Travel is one of my greatest passions. One of my favourite
              destinations in Boracay in the pahilippines
            </p>
          </div>

          <div className="pablo">
            <Image2 />
            <h4> &lt; pablo &gt;</h4>
            <p>
              {" "}
              Pablo, who is super chill, is my 2 year old mini long hair
              daschund. He is the black and taned one in the picture.
            </p>
          </div>
        </div>
        <div className="imageContainer2">
          <div className="swim">
            <Image3 />
            <h4> &lt; swim &gt;</h4>
            <p>
              {" "}
              Swimming is one of my favourite exercises. Whether it is exploring
              a reef or doing laps at the local pool.
            </p>
          </div>

          <div className="swim2">
            <Image8 />
            <h4> &lt; swim &gt;</h4>
            <p>
              {" "}
              To help with my overall health I try to maintain a regular diet
              and diet routine which I really enjoy.
            </p>
          </div>
        </div>
        <div className="hero">
          <HeroImage></HeroImage>

          <h3 className="introStyle"> &lt; professional summary &gt;</h3>
        </div>

        <div className="imageContainer">
          <div className="travel">
            <Image4 />
            <h4> &lt; previous career &gt;</h4>
            <p>
              {" "}
              7+ years of experince working within the energy industry with
              multiple analyst and leadership roles.
            </p>
          </div>
          <div className="pablo">
            <Image5 />
            <h4> &lt; career change &gt;</h4>
            <p>
              {" "}
              Began a 6 month intensive development course in August 2021 and
              graduted in February 2022 with a Diploma of IT.
            </p>
          </div>
        </div>
        <div className="imageContainer2">
          <div className="swim">
            <Image6 />
            <h4> &lt; software developer &gt;</h4>
            <p>
              {" "}
              Since my career change I have undergone an internship with Safety
              Champion Software which was an amazing experience.
            </p>
          </div>

          <div className="swim2">
            <Image7 />
            <h4> &lt; software developer &gt;</h4>
            <p>
              {" "}
              In May 2022 I landed my first dev role at Clear Dynamics as a CX
              Delivery Engineer.
            </p>
          </div>
        </div>

        <div id="resume">
          <h4 className="resumeStyles"> &lt; full professional history &gt;</h4>
          <a className="resumeLink" href="./Resume.pdf" download>
            &lt;download resume&gt;
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
