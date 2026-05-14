function About() {
  const highlights = [
    "Extensive expertise in Java (8–21), Object-Oriented Programming (OOP), design patterns, multithreading, collections framework, and clean architecture principles.",
    "Strong experience in developing scalable microservices-based applications using Spring Boot, Spring MVC, Hibernate, JPA, and RESTful APIs.",

    "Hands-on experience in building responsive and user-friendly frontend applications using React.js, Angular, JavaScript, HTML5, and CSS3.",

    "Skilled in implementing authentication and authorization using Spring Security, JWT, OAuth2, and role-based access control (RBAC).",

    "Proven ability to analyze, refactor, and modernize legacy applications to improve performance, scalability, maintainability, and code quality.",

    "Experience in database design, schema optimization, query tuning, indexing, and performance enhancement using MySQL and PostgreSQL.",

    "Strong expertise in CI/CD automation using Jenkins, Docker containerization, and automated deployment pipelines for scalable releases.",

    "Experience working with AWS cloud services including EC2, S3, and RDS for secure, scalable, and highly available deployments.",

    "Strong understanding of Agile methodologies, Software Development Life Cycle (SDLC), version control systems, and production support processes.",

    "Experience collaborating with cross-functional teams to deliver enterprise-grade applications with high availability and reliability.",
  ];

  return (
    <section id="about" className="about-section">
      {/* SECTION TITLE */}

      <h2 className="section-title gradient-text">Professional Summary</h2>

      {/* MAIN CARD */}

      <div className="about-container glass">
        {/* SUMMARY */}

        <p className="about-summary">
          Java Full Stack Developer with strong expertise in enterprise
          application development, scalable backend systems, cloud technologies,
          microservices architecture, and modern frontend development.
        </p>

        {/* HIGHLIGHTS TITLE */}

        <div className="highlights-header">
          <div className="line"></div>

          <h3>Key Highlights</h3>

          <div className="line"></div>
        </div>

        {/* HIGHLIGHTS GRID */}

        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-icon">✓</div>

              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
