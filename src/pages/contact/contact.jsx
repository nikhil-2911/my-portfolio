import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

import "./contact.css";

const ContactForm = () => {
    return (
        <div id="contact">
            <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
            <Jumbotron className="contact-jumbotron">
                <Row>
                    <Col className="d-flex justify-content-center flex-wrap">
                        <div className="m-2">
                            <a href="mailto:nikhilxmr5@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-danger" title="nikhilxmr5@gmail.com">
                                   <MailIcon/> Email Me
                                </Button>
                            </a>
                        </div>
                        
                        <div className="m-2">
                            <a href="https://www.linkedin.com/in/nikhil-kumar-8081bb192/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="Visit my LinkenIn">
                                    <LinkedInIcon/> LinkedIn
                                </Button>
                            </a>
                        </div>

                        <div className="m-2">
                            <a href="https://github.com/nikhil-2911" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-dark" title="My other projects">
                                   <GitHubIcon/> GitHub
                                </Button>
                            </a>
                        </div>
                        
                        <div className="m-2">
                            <a href="https://twitter.com/Know_Nikhil" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-info" title="Tweets are welcomed!">
                                   <TwitterIcon/> Twitter
                                </Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    );
};

export default ContactForm;