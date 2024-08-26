/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Certifications.css'; // Make sure to create this CSS file for custom styles if needed
import Fade from 'react-reveal/Fade';
import img1 from '../../images/certificateImage/ReactBasicMeta.png';
import img2 from '../../images/certificateImage/metaJavascript.png';
import img3 from '../../images/certificateImage/tcsJavascript.png';

const Certifications = () => {
    return (
        <>
            <div id="certifications" className="container certifications">
                <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Certifications</h2>
                <hr />
                <p className="pb-3 text-center">
                    👉 Here are some of the certifications I've earned:
                </p>
                <div className="row" id="certifications-list">
                    {/* Certification 1 */}
                    <Fade right>
                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-body">
                                    <div className="cert-title m-auto">
                                        <h5 className="text-uppercase text-center">
                                            Certification React Basic-Meta | Coursera
                                        </h5>
                                        <div className="card-image">
                                            <img src={img1} alt="React Basic Certificate" />
                                        </div>
                                        <div className="container mt-2">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <a
                                                        href="https://drive.google.com/file/d/1drrZRJy8UAZ5GRYRkaFPRD5fQcPtJwpL/view?usp=sharing"
                                                        className="cert-btn text-uppercase custom-btn1"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        VIEW
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    {/* Certification 2 */}
                    <Fade bottom>
                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-body">
                                    <div className="cert-title m-auto">
                                        <h5 className="text-uppercase text-center">
                                            Certification Programming With JavaScript-Meta | Coursera
                                        </h5>
                                        <div className="card-image">
                                            <img src={img2} alt="JavaScript Certificate" />
                                        </div>
                                        <div className="container mt-2">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <a
                                                        href="https://drive.google.com/file/d/1dqluGCvKRc2PkGHdufLeJKZFijZu_9ln/view?usp=sharing"
                                                        className="cert-btn text-uppercase custom-btn1"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        VIEW
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>

                    {/* Certifi 3 */}
                    <Fade right>
                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-body">
                                    <div className="cert-title m-auto">
                                        <h5 className="text-uppercase text-center">
                                            Certification of The Complete JavaScript Course
                                        </h5>
                                        <div className="card-image">
                                            <img src={img3} alt="React Basic Certificate" />
                                        </div>
                                        <div className="container mt-2">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <a
                                                        href="https://drive.google.com/file/d/1dmhn6v5HW_Ib9OEP9lrL4UvZCg3Gs2ng/view?usp=drive_link"
                                                        className="cert-btn text-uppercase custom-btn1"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        VIEW
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    {/* Add more certifications as needed */}

                </div>
            </div>
        </>
    );
}

export default Certifications;
