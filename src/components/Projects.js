import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import proj1 from "../assets/img/proj1.png";
import proj2 from "../assets/img/proj2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import proj4 from '../assets/img/proj4.png';
import proj5 from '../assets/img/proj5.png';
import proj6 from '../assets/img/proj6.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Netflix Clone",
      description: "Frontend And TMDB",
      imgUrl: proj1,
    },
    {
      title: "TripSnooze",
      description: "Frontend Development",
      imgUrl: proj2,
    },
    {
      title: "Sorting visualizer",
      description: "Python/PyGame",
      imgUrl: proj1,
    },
    {
      title: "2048",
      description: "Docker",
      imgUrl: proj4,
    },
    {
      title: "Chess",
      description: "Frontend & Backend",
      imgUrl: proj5,
    },
    {
      title: "Lime Disease Classification using Ml and Spectrometry",
      description: "Research",
      imgUrl: proj6,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={8}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I love turning ideas into functional web applications. Here are some projects where I applied my skills in React.js, Next.js, and other technologies to build efficient and user-friendly solutions. Each project helped me improve my problem-solving abilities and learn new techniques.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {projects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  )
};
