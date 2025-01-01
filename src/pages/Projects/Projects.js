/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Projects.css";
import img1 from "../../images/website_imge.webp";
import img2 from "../../images/project2.webp";
import img3 from "../../images/project3.webp";
import img4 from "../../images/netflix_p.webp";
import img5 from "../../images/Tic-Tac-Toe.webp";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    <>
      <div id="project" className="container projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 Here are my top some of the recent projects with live links and
          source code
        </p>
        {/* card design  */}
        <div className="row" id="ads">
          {/* project1 */}
          <Fade right>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full_Stack</span>
                  <img src={img1} alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase text-center">
                      My Portfolio WebApp
                    </h5>
                    <div className="container mt-2">
                      <div className="row">
                        <div className="col-md-6">
                          <a
                            href="#"
                            className="ad-btn text-uppercase custom-btn1"
                            target="_blank"
                            rel="noreferrer"
                          >
                            VIEW
                          </a>
                        </div>
                        <div className="col-md-6">
                          <a
                            href="https://github.com/mishra-naveen-dev/portfolio-mern-frontend"
                            className="ad-btn text-uppercase custom-btn2"
                            target="_blank"
                            rel="noreferrer"
                          >
                            CODE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          {/* project2 */}
          <Fade bottom>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">JavaScript Project</span>
                  <img src={img2} alt="project2" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">JavaScript</span>
                  <span className="card-detail-badge">API</span>
                </div>
                <div className="card-body">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase text-center">
                      Analog Clock With Current Time
                    </h5>
                    <div className="container mt-2">
                      <div className="row">
                        <div className="col-md-6">
                          <a
                            href="https://mishra-naveen-dev.github.io/analog_clock/"
                            className="ad-btn text-uppercase custom-btn1"
                            target="_blank"
                            rel="noreferrer"
                          >
                            VIEW
                          </a>
                        </div>
                        <div className="col-md-6">
                          <a
                            href="https://github.com/mishra-naveen-dev/analog_clock"
                            className="ad-btn text-uppercase custom-btn2"
                            target="_blank"
                            rel="noreferrer"
                          >
                            CODE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          {/* project3 */}
          <Fade left>
            <div className="col-md-4 mx-auto">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">JavaScript Project</span>
                  <img src={img3} alt="project3" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">JavaScript</span>
                </div>
                <div className="card-body">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase text-center">
                      Login & Registration Form
                    </h5>
                    <div className="container mt-2">
                      <div className="row">
                        <div className="col-md-6">
                          <a
                            href="https://mishra-naveen-dev.github.io/Login-registration-page/"
                            className="ad-btn text-uppercase custom-btn1"
                            target="_blank"
                            rel="noreferrer"
                          >
                            VIEW
                          </a>
                        </div>
                        <div className="col-md-6">
                          <a
                            href="https://github.com/mishra-naveen-dev/Login-registration-page"
                            className="ad-btn text-uppercase custom-btn2"
                            target="_blank"
                            rel="noreferrer"
                          >
                            CODE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          {/* project4 */}
          <Fade left>
            <div className="col-md-4 mt-3">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">
                    Netflix Clone Project
                  </span>
                  <img src={img4} alt="netflix_p" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">JavaScript</span>
                </div>
                <div className="card-body">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase text-center">
                      Netflix Clone Project
                    </h5>
                    <div className="container mt-2">
                      <div className="row">
                        <div className="col-md-6">
                          <a
                            href="https://mishra-naveen-dev.github.io/Netflix_Clone/"
                            className="ad-btn text-uppercase custom-btn1"
                            target="_blank"
                            rel="noreferrer"
                          >
                            VIEW
                          </a>
                        </div>
                        <div className="col-md-6">
                          <a
                            href="https://github.com/mishra-naveen-dev/Netflix_Clone"
                            className="ad-btn text-uppercase custom-btn2"
                            target="_blank"
                            rel="noreferrer"
                          >
                            CODE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          {/* project5 */}
          <Fade left>
            <div className="col-md-4 mt-3">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Tic-Tac-Toe-game</span>
                  <img src={img5} alt="Tic-Tac-Toe-game0" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">JavaScript</span>
                </div>
                <div className="card-body">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase text-center">
                      Tic-Tac-Toe-game
                    </h5>
                    <div className="container mt-2">
                      <div className="row">
                        <div className="col-md-6">
                          <a
                            href="https://mishra-naveen-dev.github.io/Tic-Tac-Toe-game-/"
                            className="ad-btn text-uppercase custom-btn1"
                            target="_blank"
                            rel="noreferrer"
                          >
                            VIEW
                          </a>
                        </div>
                        <div className="col-md-6">
                          <a
                            href="https://github.com/mishra-naveen-dev/Tic-Tac-Toe-game-"
                            className="ad-btn text-uppercase custom-btn2"
                            target="_blank"
                            rel="noreferrer"
                          >
                            CODE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          {/* project6 */}
          <Fade left>
            <div className="col-md-4 mt-3">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">FULL_STACK PROJECT</span>
                  <img src={"img not out ongoing project"} alt="" />
                </div>
                <div className="card-image-overly m-auto mt-4">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">JavaScript</span>
                  <span className="card-detail-badge">BOOTSTRAP5</span>
                  <span className="card-detail-badge">PYTHON-DJANGO</span>
                </div>
                <div className="card-body">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase text-center">
                      Learning Management System
                    </h5>
                    <div className="container mt-2">
                      <div className="row">
                        <div className="col-md-6">
                          <a
                            href="https://django-lms-project.onrender.com/"
                            className="ad-btn text-uppercase custom-btn1"
                            target="_blank"
                            rel="noreferrer"
                          >
                            VIEW
                          </a>
                        </div>
                        <div className="col-md-6">
                          <a
                            href="https://github.com/mishra-naveen-dev/django-lms-project"
                            className="ad-btn text-uppercase custom-btn2"
                            target="_blank"
                            rel="noreferrer"
                          >
                            CODE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Projects;
