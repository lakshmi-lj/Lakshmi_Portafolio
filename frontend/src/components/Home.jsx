import { motion } from "framer-motion";
import "./../styles/home.css";

function Home() {
  return (
    <section className="home" id="home">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-content"
      >
        <p className="hero-tag">JAVA FULL STACK DEVELOPER</p>

        <h1>
          Hi, I'm <span className="gradient-text">Lakshmi L</span>
        </h1>

        <h2>
          Building scalable enterprise applications using Java, Spring Boot,
          React, AWS & Microservices
        </h2>

        <p className="hero-description">
          Java Full Stack Developer with 5 years of experience building scalable
          enterprise applications using Java, Spring Boot, React.js, Angular,
          MySQL, Docker, and AWS. Skilled in microservices architecture, REST
          API development, authentication/authorization, CI/CD pipelines, and
          cloud deployments.
        </p>

        <div className="home-buttons">
          <a href="#projects">
            <button>View Projects</button>
          </a>

          <a href="/Lakshmi_resume.pdf" download>
            <button className="outline-btn">Download Resume</button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
