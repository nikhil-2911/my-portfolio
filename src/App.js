import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";

// Components
import MyNavbar from "./components/my-navbar/myNavbar";
import MyCarousel from "./components/my-carousel/myCarousel";
import TitleMessage from "./components/title-message/titleMessage";
import About from "./pages/about/about";
import Skills from "./pages/skills/skills";
import ProjectsTimeline from "./components/projects-timeline/projects-timeline";
import ContactForm from "./pages/contact/contact";
import FooterPanel from "./components/footer/footer";

import Particles from "react-particles-js";
import { particleOption } from "./particleOption";

import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ position : "relative"}}>
        <MyCarousel/>
        <TitleMessage/>
        <MyNavbar/>
        <Particles className="particles particles-box" params={particleOption} />

        {/* About me section  */}
        <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      {/* skills section */}
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr/>
          <Skills/>
        </Slide>
      </Container>
      {/* Timeline */}
      <Container className="container-box rounded">
      <Slide bottom duration={500}>
          <hr/>
          <ProjectsTimeline/>
        </Slide>
      </Container>
      {/* ContactForm */}
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>
      <hr/>
      <FooterPanel/>

    </div>
  );
}

export default App;
