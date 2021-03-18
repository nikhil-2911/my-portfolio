import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Profile from '../../assets/img/profile/profile.jpg';
import Button from 'react-bootstrap/Button'

import "./about.css";

const About = () => {
    return (
        <div id='about'>
        <div className='about'>
            <h1 className='pt-3 text-center font-details pb-3'>About Me</h1>
            <Container>
                <Row className='pt-3 pb-5 align-items-center'>
                    {/* Profile Pic */}
                    <Col xs={12} md={6}>
                        <Row className='justify-content-center mb-2 mr-2'>
                        <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                        </Row>
                    </Col>
                    {/* Description */}
                    <Col xs={12} md={6}>
                        <Row className=" align-items-start p-2 my-details rounded">
                            Hi there! I am <strong>&nbsp;Nikhil Kumar</strong>
                            <br/>A passionate programmer and a learner, born and brought up in New Delhi, India. I am a Full Stack Developer with React.js, Express.js, Node.js, and MongoDB as my tech stack.
                            <br/>
                            I am pursuing my Engineering with specialization in 'Electronics and Communication Engineering' completing my degree by 2023.
                            <br/>
                            Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                            <br/>
                            I love learning about new technologies, what problems are they solving and How can i use them to build better and scalable products.
                            <br/>  <br/>
                            {/* Buttons */}
                            <Row>
                            <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1gVMHiplgWW5RoJbAMTGvOpAd4HF8jzCV/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/nikhil-2911" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/nikhil-kumar-8081bb192/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
                </Row>
                </Row>
            </Col>
            </Row>
            </Container>
        </div>
        </div>
    )
}

export default About;
