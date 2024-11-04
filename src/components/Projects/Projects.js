import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Authbg from '../../../src/Assets/Projects/authbg.jpg'
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Authbg}
              isBlog={false}
              title="Labguru 2020"
              description="A holistic Dental Solution that seamlessly manages the entire product journey, from initial consultation with the dentist to the selection, production, manufacturing, delivery, dispatch, and tracking of dental products."
              demoLink="https://uat.illusiondentallab.com/Labguru_2020/#/labguru/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Authbg}
              isBlog={false}
              title="Aligner Portal"
              description="A Customer Portal exclusively designed for doctors/customer. This portal provides a comprehensive solution for tracking products from the production phase to final delivery.."
              demoLink="https://uat.illusiondentallab.com/IAP/#/dentist/login"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
