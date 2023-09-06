import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { Linkedin, Github } from "react-bootstrap-icons";
import Card from "react-bootstrap/Card";
import "../App.css";
import logo from "../assets/logo_abhishek.png";
import abhishek from "../assets/abhishek_img.jpeg";
import hsc from "../assets/hsc.png";
import ssc from "../assets/ssc.png";
import university from "../assets/university.png";
import Frontend from "../assets/frontend.png";
import Backend from "../assets/backend.png";
import Database from "../assets/database.png";
import Language from "../assets/language.png";
import Other from "../assets/other.png";
import MajorProject from "../assets/major-project.png";
import WebBrowser from "../assets/web-browser-project.png";
import Phone from "../assets/phone.png";
import Mail from "../assets/mail.png";

// import Background from "../Components/Backround.jsx";

const Page = () => {
  return (
    <>
      <div className="pageBody">
        <Container className="handle-media">
          <div className="hello">
            <center className="logo-box">
              <img className="logo img-fluid" src={logo} alt="logo" />
            </center>
            <center className="hello-info">
              <h1 className="hello-heading">
                <span class="black-text">
                  <i className="cursive-font">Hello,</i>
                </span>
                <span class="brown-text"> I am Abhishek!</span>
              </h1>
              <p className="sub-heading hello-page">
                Passionate web developer with a flair for creating seamless and
                innovative digital experiences. Through a fusion of code and
                creativity, I specialize in building user-centered websites that
                leave a lasting impact. Let's collaborate to turn your ideas
                into captivating online realities.
              </p>
              <button class="hire-button" onClick={() => window.location.href = 'mailto:12abhishek10@gmail.com'}>Hire Me</button>
            </center>
          </div>

          <div className="about">
            {/* <center> */}
            <Row>
              <Col xl={6} md={6} sm={12}>
                <div className="aboutinfo">
                  <h2 className="about-abhishek cursive-font">
                    About Abhishek Sharma
                  </h2>
                  <p className="about-info sub-heading">
                    I am Abhishek, a seasoned software developer with a passion
                    for merging design elegance with the precision of code. My
                    rich portfolio encapsulates a journey of innovation,
                    empowering businesses through cutting-edge projects that
                    push boundaries. Beyond coding, I specialize in crafting
                    user-centric experiences that harmonize form and function.
                    With a relentless pursuit of excellence, I continually
                    explore new horizons, collaborating with peers and engaging
                    in tech communities. Join me in shaping a future where
                    innovation knows no bounds.
                  </p>
                </div>
              </Col>
              <Col xl={6} md={6} sm={12}>
                <img
                  className="abhishek-pic"
                  src={abhishek}
                  alt="abhishek sitting on chair"
                />
              </Col>
            </Row>
            {/* </center> */}
          </div>

          <div className="background-history">
            <h2 className="background-header cursive-font">Background</h2>
            <Row>
              <Col>
                <Card className="card-background-section">
                  <Card.Img
                    className="image-background-section img-fluid"
                    variant="top"
                    src={university}
                  />
                  <Card.Body>
                    <Card.Title className="card-title">
                      University of Mumbai
                    </Card.Title>
                    <hr className="hr-custom" />
                    <Card.Text className="sub-heading">
                      Bachlor of Engineering <br />
                      Information Technology
                      <br /> <b>8.93 c.g.p.a (80%)</b>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="card-background-section">
                  <Card.Img
                    className="image-background-section img-fluid" 
                    variant="top"
                    src={hsc}
                  />
                  <Card.Body>
                    <Card.Title>R.K.Talreja College of Science</Card.Title>
                    <hr className="hr-custom" />
                    <Card.Text className="sub-heading">
                      Completed HSC in 2019 <br />
                      <b>72%</b>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="card-background-section">
                  <Card.Img
                    className="image-background-section img-fluid"
                    variant="top"
                    src={ssc}
                  />
                  <Card.Body>
                    <Card.Title>St Mary's High School</Card.Title>
                    <hr className="hr-custom" />
                    <Card.Text className="sub-heading">
                      Completed SSC in 2017 <br /> <b>86.60%</b>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>

          <div className="skills">
            <h2 className="background-header">Skills</h2>
            <Row>
              <Col>
                <Card className="card-background-section">
                  <Card.Img
                    className="image-background-section img-fluid"
                    variant="top"
                    src={Frontend}
                  />
                  <Card.Body>
                    <Card.Title className="card-title">
                      Frontend Technology
                    </Card.Title>
                    <hr className="hr-custom" />
                    <Card.Text className="sub-heading">
                      ReactJS,Bootstrap <br />
                      HTML,CSS
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="card-background-section">
                  <Card.Img
                    className="image-background-section img-fluid"
                    variant="top"
                    src={Backend}
                  />
                  <Card.Body>
                    <Card.Title>Backend Technology</Card.Title>
                    <hr className="hr-custom" />
                    <Card.Text className="sub-heading">NodeJS</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="card-background-section">
                  <Card.Img
                    className="image-background-section img-fluid"
                    variant="top"
                    src={Database}
                  />
                  <Card.Body>
                    <Card.Title>
                      Database <br /> Technology
                    </Card.Title>
                    <hr className="hr-custom" />
                    <Card.Text className="sub-heading">
                      MySQL,PostgreSQL <br />
                      MongoDB
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="card-background-section">
                  <Card.Img
                    className="image-background-section img-fluid"
                    variant="top"
                    src={Language}
                  />
                  <Card.Body>
                    <Card.Title className="card-title">
                      Programming Languages
                    </Card.Title>
                    <hr className="hr-custom" />
                    <Card.Text className="sub-heading">
                      Python,Java <br />
                      JavaScript,C,C++
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="card-background-section">
                  <Card.Img
                    className="image-background-section img-fluid"
                    variant="top"
                    src={Other}
                  />
                  <Card.Body>
                    <Card.Title className="card-title">
                      Other <br />
                      Technology
                    </Card.Title>
                    <hr className="hr-custom" />
                    <Card.Text className="sub-heading">Git,Github</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>

          <div className="project">
            <h1 className="background-header">Projects</h1>
            {/* <Container> */}
            <Row>
              <Col xl={8} md={8} sm={12} xs={12}>
                <div className="project-1">
                  <h2 className="project-header cursive-font">
                    Ml Based Indian Unconventional Emission Prediction System
                    For Indian Scenario
                  </h2>
                  <p className="sub-heading project-para">
                    Revitalizing Urban Road Networks: Employing Innovative
                    Intersections for Efficient Traffic Management and
                    Sustainable Transportation. Leveraging advanced intersection
                    designs like DDI and RCUT, this project optimizes traffic
                    flow, reduces emissions, and enhances safety through
                    real-time data analysis and ML algorithms.
                  </p>
                </div>
              </Col>
              <Col xl={4} md={4} sm={12}>
                <img
                  className="project-1-img img-fluid"
                  src={MajorProject}
                  alt="abhishek's Major Project"
                />
              </Col>
              {/* <hr className="hr-custom hr-margin" /> */}
            </Row>
            <div className="project-2">
              <Row>
                <Col xl={8} md={8} sm={12}>
                  <div className="">
                    <h2 className="project-header cursive-font">
                      Automated web Browser
                    </h2>
                    <p className="sub-heading project-para">
                      Our project introduces seamless automation by auto-adding
                      frequently visited sites as tabs, an offline snake
                      mini-game for entertainment, and robust password detection
                      for enhanced security. Experience a more efficient and
                      enjoyable browsing journey with our innovative features
                    </p>
                  </div>
                </Col>
                <Col xl={4} md={4} sm={12}>
                  <img
                    className="project-2-img img-fluid"
                    src={WebBrowser}
                    alt="abhishek's Web Browser Project"
                  />
                </Col>
                {/* <hr className="hr-custom hr-margin" /> */}
              </Row>
            </div>
            {/* </Container> */}
          </div>

          {/* <center>
      <div className="sub-heading footer">Made with &#9829;</div>
      </center> */}
        </Container>
      </div>

      {/* -----------------contacts----------------- */}

      <div className="contact">
        <div className="socials">
          <Row>
            <Col xl={9} md={9} sm={9} xs={12}>
              <h5 className="contact-message">
                Reach out if you want to create impact together.
              </h5>
              <hr className="contact-hr" />
              <h5 className="sub-heading">
                TO SEE MORE OF MY WORK, VISIT MY SOCIALS:
              </h5>

              <a
                className="footer-links"
                href="https://www.linkedin.com/in/abhisheksharma1210"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                className="footer-links"
                href="https://github.com/abhishek-sharma-2001"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
            </Col>
          </Row>
        </div>
        <div className="phone">
          <Row className="custom-row">
            <Col xl={9} md={7} sm={7} xs={0}></Col>
            <Col xl={3} md={5} sm={5} xs={12}>
              <Row onClick={() => window.location.href = 'tel:+91 9819357375'}>
                <Col xs={3}>
                  <img src={Phone} className="img-fluid" alt="phone icon" />
                </Col>
                <Col className="cursor">
                  <Row>PHONE</Row>
                  <Row className="sub-heading">+91 9819357375</Row>
                </Col>
              </Row>
              <br />
              <Row onClick={() => window.location.href = 'mailto:12abhishek10@gmail.com'}>
                <Col xs={3}>
                  <img src={Mail} className="img-fluid" alt="Mail icon" />
                </Col>
                <Col className="cursor">
                  <Row>EMAIL</Row>
                  <Row className="sub-heading">12abhishek10@gmail.com</Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <br />
          <br />
        </div>
      </div>
    </>
  );
};


export default Page;
