import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="E-commerce mern"
              description="Developed a full-stack e-commerce web application using MongoDB, Express.js, React, and Node.js. Implemented user authentication, product listings, cart & checkout flow, and order management. Integrated secure REST APIs, responsive UI, and admin dashboard for product and order control."
              ghLink="https://github.com/Ayushkr2736/e-commerce-mern"
            // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Real-time-chatBox"
              description="Built a real-time chat application using MERN stack with Socket.IO. Enabled instant messaging, user authentication, online status, and message persistence. Designed a responsive UI and secure APIs to ensure fast, reliable, and scalable communication."
              ghLink="https://github.com/Ayushkr2736/Real-time-chatBox"
            // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="GymPoint_Api"
              description="Developed a scalable Gym Management REST API using Node.js, Express, and MongoDB. Implemented user roles, membership plans, attendance tracking, and subscription management. Secured endpoints with authentication and built clean, well-structured APIs for easy frontend integration."
              ghLink="https://github.com/Ayushkr2736/gympoint_api"
            // demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Project-management-tool"
              description="Built a full-stack Project Management Tool using the MERN stack. Implemented task creation, assignment, status tracking, deadlines, and team collaboration. Designed secure APIs, role-based access, and a responsive dashboard for efficient project monitoring."
              ghLink="https://github.com/Ayushkr2736/project_management_tool-"
            // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Password-manager"
              description="Developed a secure Password Manager using the MERN stack. Implemented encrypted password storage, user authentication, and CRUD operations for credentials. Focused on data security, clean APIs, and a simple, responsive interface for safe password management."
              ghLink="https://github.com/Ayushkr2736/password_manager"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Communication_service_auth"
              description="Built a secure Authentication Service for communication-based applications using Node.js, Express, and MongoDB. Implemented user registration, login, JWT-based authentication, role-based access control, and API security. Designed the service to be scalable and easily integrated with chat, email, or notification systems."
              ghLink="https://github.com/Ayushkr2736/communication_service_auth"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
