/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Projects.css'
import img1 from '../../images/website_imge.png'
import img2 from '../../images/project2.png'
import img3 from '../../images/project3.png'
import img4 from '../../images/netflix_p.png';
import img5 from '../../images/Tic-Tac-Toe.png';
import Fade from 'react-reveal/Fade';

const Projects = () => {
    return (
        <>
            <div id="project" className="container projects">

                <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Projects</h2>
                <hr />
                <p className="pb-3 text-center">
                    👉 Here are my top  some of the recent projects with live links
                    and source code</p>
                {/* card design  */}
                <div className="row" id="ads">
                    {/* project1 */}
                    <Fade right>

                        <div className="col-md-4 ">
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
                                <div className="card-body ">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase text-center">
                                            My Portfolio WebApp
                                        </h5>


                                        <div class="container mt-2">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <a href="#" class=" ad-btn  text-uppercase custom-btn1" target="_blank" rel="noreferrer">VIEW</a>
                                                </div>
                                                <div class="col-md-6">
                                                    <a href="https://github.com/mishra-naveen-dev/portfolio-mern-frontend" class=" ad-btn  text-uppercase  custom-btn2" target="_blank" rel="noreferrer">CODE</a>
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
                        <div className="col-md-4 ">
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
                                <div className="card-body ">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase text-center">
                                            Analog Clock With Current Time
                                        </h5>
                                        <div class="container mt-2">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <a href="https://mishra-naveen-dev.github.io/analog_clock/" class=" ad-btn  text-uppercase custom-btn1" target="_blank" rel="noreferrer">VIEW</a>
                                                </div>
                                                <div class="col-md-6">
                                                    <a href="https://github.com/mishra-naveen-dev/analog_clock" class=" ad-btn  text-uppercase  custom-btn2" target="_blank" rel="noreferrer">CODE</a>
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
                                <div className="card-body ">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase text-center">
                                            Login & Resgistration Form
                                        </h5>
                                        <div class="container mt-2">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <a href="https://mishra-naveen-dev.github.io/Login-registration-page/" class=" ad-btn  text-uppercase custom-btn1" target="_blank" rel="noreferrer">VIEW</a>
                                                </div>
                                                <div class="col-md-6">
                                                    <a href="https://github.com/mishra-naveen-dev/Login-registration-page" class=" ad-btn  text-uppercase  custom-btn2" target="_blank" rel="noreferrer">CODE</a>
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
                        <div className="col-md-4  mt-3">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">Netflix Clone Project</span>
                                    <img src={img4} alt="netflix_p" />

                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">HTML</span>
                                    <span className="card-detail-badge">CSS</span>
                                    <span className="card-detail-badge">JavaScript</span>

                                </div>
                                <div className="card-body ">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase  text-center">
                                            Netflix Clone Project
                                        </h5>
                                        <div class="container mt-2">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <a href="https://mishra-naveen-dev.github.io/Netflix_Clone/" class=" ad-btn  text-uppercase custom-btn1" target="_blank" rel="noreferrer">VIEW</a>
                                                </div>
                                                <div class="col-md-6">
                                                    <a href="https://github.com/mishra-naveen-dev/Netflix_Clone" class=" ad-btn  text-uppercase  custom-btn2" target="_blank" rel="noreferrer">CODE</a>
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
                                        <h5 className="text-uppercase  text-center">
                                            Tic-Tac-Toe-game
                                        </h5>
                                        <div class="container mt-2">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <a href="https://mishra-naveen-dev.github.io/Tic-Tac-Toe-game-/" class=" ad-btn  text-uppercase custom-btn1" target="_blank" rel="noreferrer">VIEW</a>
                                                </div>
                                                <div class="col-md-6">
                                                    <a href="https://github.com/mishra-naveen-dev/Tic-Tac-Toe-game-" class=" ad-btn  text-uppercase  custom-btn2" target="_blank" rel="noreferrer">CODE</a>
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
                                        <h5 className="text-uppercase  text-center">
                                            Learning Management System
                                        </h5>
                                        {/* <a className="ad-btn text-uppercase" href="https://mishra-naveen-dev.github.io/Tic-Tac-Toe-game-/" target="_blank" rel="noreferrer" >View</a> */}
                                        <div class="container mt-2">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <a href="#" class=" ad-btn  text-uppercase custom-btn1" target="_blank" rel="noreferrer">VIEW</a>
                                                </div>
                                                <div class="col-md-6">
                                                    <a href="https://github.com/mishra-naveen-dev/django-lms-project" class=" ad-btn  text-uppercase  custom-btn2" target="_blank" rel="noreferrer">CODE</a>
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




            {/* <div className="container certificates">
            <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Certificates</h2>
            <hr />

        </div> */}
        </>
    )
}

export default Projects