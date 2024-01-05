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
              title="React Weather App"
              description="Developed with React.js, TypeScript, Redux, and Tailwind CSS, this app delivers real-time weather updates based on user location. With a clean, intuitive interface, it ensures an optimal user experience."
              ghLink="https://github.com/bad02/React-weather-app"
              demoLink="https://bad02.github.io/React-weather-app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Employee Management System"
              description="The Employee Management System is a streamlined web application designed for efficient HR operations. It simplifies the process of adding, updating, and deleting employee records, fostering organizational efficiency across diverse projects."
              ghLink="https://github.com/bad02/employee-management-app"
              demoLink="https://superb-palmier-0823f6.netlify.app/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Github Layout"
              description="GitHub Layout Project: This web application, created as part of a GitHub Layout project, leverages the GitHub API to dynamically fetch user profile and repository details. Users can seamlessly explore and display information about GitHub profiles and repositories through an intuitive and user-friendly web interface."
              ghLink="https://github.com/bad02/Layoutproject"
              demoLink="https://amazing-daifuku-aa0a66.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="1SpaceX"
              description="1SpaceX is a web app that helps you to find all the information about SpaceX components. You can find information about the capsules, cores, launches, payloads and rockets. Features Search engine for all the physical components Information about the physical components Installable on mobile devices."
              ghLink="https://github.com/bad02/1SpaceX"
              demoLink="https://1-space-x.vercel.app/?vercelToolbarCode=SYmYExRuZUvIOCu"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Task Manager"
              description=" Built with Next.js, TypeScript, Tailwind CSS, and Mobx State Tree, this application enables seamless task management. Users can effortlessly create, edit, and delete tasks, with data persistence using local storage. The clean interface and intuitive functionalities make task handling a breeze."
              ghLink="https://github.com/bad02/task-manager-app"
              demoLink="https://flourishing-trifle-60c4d7.netlify.app/"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Catalogue Management System"
              description="Catalogue Management App: React.js-based system for seamless product management, featuring search, category filtering, and pie chart visualization. Utilizes useState, useEffect, and external API (fakestoreapi) for a responsive UI. To set up, clone the repo, install node_modules, and run with npm start."
              ghLink="https://github.com/bad02/Catalogue-management-system"
              demoLink="https://legendary-fox-f91f9f.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
