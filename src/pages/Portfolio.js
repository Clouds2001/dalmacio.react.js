import "./Portfolio.css";
import Navbar from "./Navbar";

import logoFree1 from "../img/free1.jpg";
import logoFree2 from "../img/free2.png";
import logoFree3 from "../img/frere3.png";

import logoTech1 from "../img/tech1.png";
import logoTech2 from "../img/tech2.jpg";
import logoTech3 from "../img/tech3.jpg";

import logoFewd1 from "../img/fewd1.png";
import logoFewd2 from "../img/fewd2.jpg";
import logoFewd3 from "../img/fewd3.jpg";


const Portfolio = () => {
  return (
    <>
      <Navbar />
      <section id="portfolio">
        <div className="container">
          <div class="isotope">
            <div class="row">
              <hr />
              <br/>
              <br/>
              <br/>
              <p className="display-6"><center><b>Freelancer</b></center></p>
              <hr/>
              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={logoFree1} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={logoFree2} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={logoFree3} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>
              <p className="display-6"><center><b>Technical Support</b></center></p>
              <hr/>
              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={logoTech1} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={logoTech2} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={logoTech3} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

              <p className="display-6"><center><b>Front-End Web Developer</b></center></p>
              <hr/> 
              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={logoFewd1} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={logoFewd2} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>


              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={logoFewd3} alt="" />
                  <div class="overlay"></div>
                </div>
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
              <a href="#"> Klydz L. Dalmacio</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;
