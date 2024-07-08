import "./Home.css";

import profilePic from "../img/Pic1.png";
import logoPic from "../img/freelancer.png";
import logoPic1 from "../img/ts.png";
import logoPic2 from "../img/frontEWD.png";

import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper">
        <div className="overlay">
          <div class="container1">

            <div id="banner" className="d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 ok">
                    <div className="card">
                      <h1 className="text display-4 fw-bold text-light">Hello, I'm</h1>
                      <h1 className="text display-4 fw-bold text-light">
                      Klydz L. Dalmacio
                      </h1>
                      <br />
                      <p className="self text-light">
                        I'm a Freelancer, Tech. Support & Front-End Web Developer
                      </p>
                      <a href="" className="btn btn-brand shadow">
                        Get to Know Better
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 zoom-effect">
                    <div className="card">
                      <img
                        src={profilePic}
                        alt="Profile Picture of Klydz L. Dalmacio"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg
        className="sea-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="sea-wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="sea-wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
        </g>
        <g className="sea-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
      </svg>

      <section id="info">
        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={logoPic} alt="" />
                <h4 className="text-center">Freelancer</h4>
                <p>
                Hi, I'm Klydz Dalmacio! A tech-savvy freelancer from Kabankalan City, Philippines.
                I'm a recent graduate with a Bachelor of Science in Information Technology from Central Philippines State University.
                Equipped with a strong foundation in programming, networking, and cybersecurity, 
                I'm eager to put my skills to work as a freelancer.
                </p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={logoPic1} alt="" />
                <h4 className="text-center">Technical Support</h4>
                <p>
                Greetings! I'm Klydz Dalmacio, a tech enthusiast with a passion for helping people,
                With a background in Information Technology from Central Philippines State University. 
                I possess a strong understanding of software, and troubleshooting techniques. 
                Whether you're facing a puzzling computer issue, or simply need some friendly guidance.
                </p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={logoPic2} alt="" />
                <h4 className="text-center">Front-End Web Developer</h4>
                <p>
                Hi there, I'm Klydz Dalmacio, a passionate front-end web developer based in Kabankalan City.
                With a strong foundation in web development languages like HTML, CSS, and JavaScript, 
                I love turning design concepts into clean, functional, and visually appealing user interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>
              &copy; <span id="displayYear"></span>
              <a href=""> Klydz L. Dalmacio</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
