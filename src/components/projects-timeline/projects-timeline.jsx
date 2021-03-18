import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

// projects logo
import L_IDeveloper from "../../assets/img/projects/iDeveloper.png";
import L_Todo from "../../assets/img/projects/todoReact.png";
import L_Postman from "../../assets/img/projects/postmanClone.png";
import L_CUSTOMERCLI from "../../assets/img/projects/customerDataCli.png";
import L_WEATHERAPP from "../../assets/img/projects/weatherApp.png";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_HTML from "../../assets/img/skills/html-5.svg";
import L_CSS from "../../assets/img/skills/css3.svg";
import L_MATERIAL from "../../assets/img/skills/material-ui-1.svg";
import L_FIREBASE from "../../assets/img/skills/firebase-icon.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_NODEJS from "../../assets/img/skills/nodejs.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import L_EXPRESSJS from "../../assets/img/skills/express.svg";
import L_HEROKU from "../../assets/img/skills/heroku.svg";

import "./projects-timeline.css";

const ProjectsTimeline = () => {
    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
                <Events>
                    {/* Second Project */}
                    <ImageEvent
                        date=""
                        className="text-center"
                        text="Todo React App"
                        src={L_Todo}
                        alt="Todo React App"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> Todo app using React having realtime functionality
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Complete React App using hooks,usestate,useeffect</li>
                                                    <li>Realtime connected to Firebase database</li>
                                                    <li>Responsive Design</li>
                                                    <li>Using Material-UI components</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_REACT}
                                                                alt="react"
                                                                rounded
                                                                className="image-style m-1"
                                                            />{" "}
                                                            React
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML}
                                                                alt="html-5"
                                                                rounded
                                                                className="image-style m-1"
                                                            />{" "}
                                                            Html5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS}
                                                                alt="html-5"
                                                                rounded
                                                                className="image-style m-1"
                                                            />{" "}
                                                            CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_MATERIAL}
                                                                alt="html-5"
                                                                rounded
                                                                className="image-style m-1"
                                                            />{" "}
                                                            Material Ui
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_FIREBASE}
                                                                alt="html-5"
                                                                rounded
                                                                className="image-style m-1"
                                                            />{" "}
                                                            Firebase Database
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://todo-app-67d8c.web.app/"
                                    target="_blank"
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/nikhil-2911/todo-react-app"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Third Project */}
                    <ImageEvent
                        date=""
                        className="text-center"
                        text="Postman clone"
                        src={L_Postman}
                        alt="Postman clone"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> Postman clone made using bootstrap realtime working
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Powered by Bootstrap</li>
                                                    <li>Realtime get or post request</li>
                                                    <li>Responsive Design</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_BOOTSTRAP}
                                                                alt="bootstrap 4"
                                                                rounded
                                                                className="image-style m-1"
                                                            />{" "}
                                                            Bootstrap
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML}
                                                                alt="html-5"
                                                                rounded
                                                                className="image-style m-1"
                                                            />{" "}
                                                            Html5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_JAVASCRIPT}
                                                                alt="html-5"
                                                                rounded
                                                                className="image-style m-1"
                                                            />{" "}
                                                            Javascript
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://nikhil-2911.github.io/postMaster/"
                                    target="_blank"
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/nikhil-2911/postMaster"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Fourth Project */}
                    <ImageEvent
                        date=""
                        className="text-center"
                        text="Customer Node CLI"
                        src={L_CUSTOMERCLI}
                        alt="Customer CLI"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> CLI made with NodeJS and MongoDB where user can store customer data in realtime
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Add, remove, find, delete functions</li>
                                                    <li>Using Nodejs, MongoDB</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_NODEJS}
                                                                alt="nodejs"
                                                                rounded
                                                                className="image-style m-1"
                                                            />{" "}
                                                            NodeJS
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_MONGODB}
                                                                alt="mongoDB"
                                                                rounded
                                                                className="image-style m-1"
                                                            />{" "}
                                                            MongoDB
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://user-images.githubusercontent.com/66074167/109412327-4783ab00-79cd-11eb-89e5-ab65fbbcab86.gif"
                                    target="_blank"
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/nikhil-2911/node_customer_cli"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Fifth Project */}
                    <ImageEvent
                        date=""
                        className="text-center"
                        text="weather-app"
                        src={L_WEATHERAPP}
                        alt="Weather App"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is a realtime weather app using openweather api made with nodejs,express etc.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Realtime weather data from all over the world</li>
                                                    <li>Using hbs template for realtime updating</li>
                                                    <li>Deploy on Heroku</li>
                                                    <li>Responsive Design</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_EXPRESSJS}
                                                                alt="expressJs"
                                                                rounded
                                                                className="image-style m-1"
                                                            />{" "}
                                                            ExpressJs
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML}
                                                                alt="html-5"
                                                                rounded
                                                                className="image-style m-1"
                                                            />{" "}
                                                            Html5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS}
                                                                alt="css-3"
                                                                rounded
                                                                className="image-style m-1"
                                                            />{" "}
                                                            Css3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_JAVASCRIPT}
                                                                alt="javascript"
                                                                rounded
                                                                className="image-style m-1"
                                                            />{" "}
                                                            Css3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HEROKU}
                                                                alt="heroku"
                                                                rounded
                                                                className="image-style m-1"
                                                            />{" "}
                                                            Heroku
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://weather-app29.herokuapp.com/"
                                    target="_blank"
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/nikhil-2911/realtime-weather-project"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                     {/* Project: iDeveloper */}
                     <ImageEvent
                        date=""
                        className="text-center"
                        text="i_Developer"
                        src={L_IDeveloper}
                        alt="Bootstrap iDeveloper"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is a completely bootstrap website with multiple pages
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Powered by Bootstrap</li>
                                                    <li>Responsive Design</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_BOOTSTRAP}
                                                                alt="bootstrap 4"
                                                                rounded
                                                                className="image-style m-1"
                                                            />{" "}
                                                            Bootstrap
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML}
                                                                alt="html-5"
                                                                rounded
                                                                className="image-style m-1"
                                                            />{" "}
                                                            Html5
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://nikhil-2911.github.io/iDeveloper/"
                                    target="_blank"
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/nikhil-2911/iDeveloper"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                </Events>
            </Timeline>
        </div>
    );
};

export default ProjectsTimeline;