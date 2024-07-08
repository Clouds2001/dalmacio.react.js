import "./Contact.css";

import Dalmacio from "../img/Pic1.png";

import Navbar from "./Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div id="banner" className="d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 ok">
                    <div className="card">
                      <h1 className="text display-4 fw-bold text-light">Klydz L. Dalmacio</h1>
                      <p className="self fw-bold text-light">
                      I'd be happy to discuss this further.
                      </p>
                      <br />
                      <p className="self text-light">
                      Please reach out to me via different social medias provided below or schedule a free consultation at your convenience.<br/>
                      Mobile No: 09561376454  <br/>
                      Email: keyzdalmacio@gmail.com
                       
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 zoom-effect">
                    <div className="card">
                      <img
                        src={Dalmacio}
                        alt="Profile Picture of Klydz L. Dalmacio"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>
              &copy; <span id="displayYear"></span>  Klydz L. Dalmacio&nbsp;
              <a href="https://facebook.com/dalmakdz"><FontAwesomeIcon className="icons" icon={faFacebook} />&nbsp;</a>
              <a href="https://github.com/clouds2001"><FontAwesomeIcon className="icons" icon={faGithub} />&nbsp;</a>
              <a href="https://instagram.com/klydyyyy"><FontAwesomeIcon className="icons" icon={faInstagram} />&nbsp;</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
