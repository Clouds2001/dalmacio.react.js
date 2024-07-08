import "./Experience.css";

import logoOjt from "../img/ojt.jpg";
import logoCwd from "../img/cwd.jpg";
import logoFewd from "../img/fewd.jpeg";

import Navbar from "./Navbar";

const Experience = () => {
  return (
    <>
      <Navbar />
          <section id="info">
        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={logoOjt} alt="" />
                <h4 className="text-center">On the Job Training</h4>
                <p>
                Hi, I'm Klydz Dalmacio! My On-the-Job Training (OJT) in Municipality of Mabinay, Negros Oriental equipped me with practical IT skills. 
                I applied my knowledge of programming, and networking real-world tasks,
                learned from professionals, and gained exposure to daily IT operations.
                </p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={logoCwd} alt="" />
                <h4 className="text-center">Creative Web Design</h4>
                <p>
                With a Creative Web Design course at TESDA in Kabankalan City.
                The TESDA course equipped me with fresh web design skills that perfectly 
                complemented what I was already learning at CPSU. It was a challenge for sure, but seeing how much I learned 
                from the experience made it completely worthwhile. Now I feel even more prepared to tackle the exciting world of 
                web development!
                </p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={logoFewd} alt="" />
                <h4 className="text-center">Front-End Web Developer</h4>
                <p>
                Klydz L. Dalmacio, a recent graduate of Central Philippines State University(CPSU), was brimming with excitement as 
                I embarked on our thesis development. My envisioned a user-friendly and visually appealing front-end system that
                 would elevate the presentation of my thesis. 
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

export default Experience;
