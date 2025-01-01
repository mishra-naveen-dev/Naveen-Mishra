import React, { memo } from 'react';
import './WorkExp.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TbBrandCpp } from 'react-icons/tb';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaPython } from 'react-icons/fa';
import { GrReactjs } from 'react-icons/gr';
import { DiJavascript1, DiNodejs, DiMysql } from 'react-icons/di';

const WorkExp = memo(() => {
    return (
        <>
            <div id="work" className="work">
                <div className="container work-exp">
                    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Work Experiences</h2>
                    <hr />
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "#fab1a0", color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid  #fab1a0' }}
                            date="Present"
                            iconStyle={{ background: '#a29bfe', color: 'black' }}
                            icon={<FaPython />}
                        >
                            <h3 className="vertical-timeline-element-title">Django / Django Framework</h3>
                            <h4 className="vertical-timeline-element-subtitle">Udemy/Self/Youtube</h4>
                            <p>
                                Learning Python, Django, and Django REST Framework with practical implementation.
                                Developing web applications and RESTful APIs to build robust and scalable systems.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "#fab1a0", color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid  #fab1a0' }}
                            date="Present"
                            iconStyle={{ background: '#a29bfe', color: 'black' }}
                            icon={<GrReactjs />}
                        >
                            <h3 className="vertical-timeline-element-title">React Framework</h3>
                            <h4 className="vertical-timeline-element-subtitle">Meta-Coursera/Self/Youtube</h4>
                            <p>
                                Here I am learning react with real project which is my first react project is my portfolio.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#00cec9', color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid  #00cec9' }}
                            date="Present"
                            iconStyle={{ background: '#a29bfe', color: 'black' }}
                            icon={<DiNodejs />}
                        >
                            <h3 className="vertical-timeline-element-title">Node/Express/MongoDB</h3>
                            <h4 className="vertical-timeline-element-subtitle">Self/Youtube</h4>
                            <p>
                                Here I am learning node, express, MongoDB with project implementation.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#00cec9', color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid  #00cec9' }}
                            date="Present"
                            iconStyle={{ background: '#a29bfe', color: 'black' }}
                            icon={<DiMysql />}
                        >
                            <h3 className="vertical-timeline-element-title">MySQL</h3>
                            <h4 className="vertical-timeline-element-subtitle">Self/Learning</h4>
                            <p>
                                Learning MySQL for database management, including creating schemas,
                                and performing CRUD operations. Working on understanding SQL queries
                                and database design for efficient data storage and retrieval.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#e17055', color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid #e17055' }}
                            date="Present"
                            iconStyle={{ background: '#a29bfe', color: 'black' }}
                            icon={<DiJavascript1 />}
                        >
                            <h3 className="vertical-timeline-element-title">Coursera-Meta/TCS/JavaScript</h3>
                            <h4 className="vertical-timeline-element-subtitle">Coursera-Meta/TCS/Self/Youtube</h4>
                            <p>
                                Here I am learning JavaScript with projects (Snake game, Tic Tac Toe game, etc).
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#fab1a0', color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid #fab1a0' }}
                            date="Dec 2022"
                            iconStyle={{ background: '#a29bfe', color: 'black' }}
                            icon={<FaCss3Alt />}
                        >
                            <h3 className="vertical-timeline-element-title">CSS</h3>
                            <h4 className="vertical-timeline-element-subtitle">Coursera-Meta/Self/Youtube</h4>
                            <p>
                                Here I learn and implement the basics of web development with CSS.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#ffeaa7', color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid #ffeaa7' }}
                            date="Dec 2022"
                            iconStyle={{ background: '#a29bfe', color: 'black' }}
                            icon={<AiFillHtml5 />}
                        >
                            <h3 className="vertical-timeline-element-title">HTML</h3>
                            <h4 className="vertical-timeline-element-subtitle">Coursera-Meta/Self/Youtube</h4>
                            <p>
                                Here I learn and implement the basics of web development with HTML.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#b2bec3', color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid  #b2bec3' }}
                            date="July 2022"
                            iconStyle={{ background: '#a29bfe', color: 'black' }}
                            icon={<TbBrandCpp />}
                        >
                            <h3 className="vertical-timeline-element-title">C / C++</h3>
                            <h4 className="vertical-timeline-element-subtitle">Self/CodeMantra-Indore</h4>
                            <p>
                                Here I got the chance to learn programming languages with implementation.
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </>
    );
});

export default WorkExp;