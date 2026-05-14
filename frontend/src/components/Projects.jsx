const projects = [

  {
    title: "Classroom Video Management System",

    role: "Java Full Stack Developer",

    duration: "Enterprise Application",

    overview:
      "Designed and developed an enterprise-grade classroom video management platform for automated lecture recording, scheduling, live streaming, monitoring, and centralized video access across multiple classrooms.",

    tech: [
      "Java",
      "Spring Boot",
      "React.js",
      "Microservices",
      "AWS",
      "Docker",
      "PostgreSQL",
      "JWT",
    ],

    achievements: [

      "Developed scalable microservices architecture using Java and Spring Boot to support high-volume classroom video processing.",

      "Built secure RESTful APIs for seamless communication between frontend applications and backend services.",

      "Created responsive React.js dashboards for video scheduling, monitoring, and playback management.",

      "Implemented authentication and role-based authorization using Spring Security and JWT.",

      "Integrated FFmpeg and Quartz Scheduler to automate classroom recording and streaming workflows.",

      "Optimized PostgreSQL database queries and indexing for improved application performance.",

      "Containerized services using Docker and deployed applications in AWS cloud environments.",

      "Enhanced maintainability and scalability by following clean architecture and modular design principles."
    ]
  },

  {
    title: "PESU Academy Platform",

    role: "Full Stack Developer",

    duration: "Academic Management System",

    overview:
      "Developed a centralized academic workflow automation platform for examination management, evaluation processes, student records, and faculty operations across university departments.",

    tech: [
      "Java",
      "Spring MVC",
      "Angular",
      "MySQL",
      "REST APIs",
      "AWS",
    ],

    achievements: [

      "Developed academic management modules using Java, Spring MVC, and Angular framework.",

      "Designed REST APIs for real-time synchronization of student and examination data.",

      "Improved database performance through MySQL query optimization, indexing, and schema tuning.",

      "Automated academic workflows, reducing manual effort and improving operational efficiency.",

      "Enhanced user experience for students, faculty, and administrators with responsive UI components.",

      "Collaborated with cross-functional teams in Agile development environments.",

      "Maintained scalable and reusable code following enterprise application development standards."
    ]
  }

];

function Projects() {

  return (

    <section id="projects" className="projects-section">

      <h2 className="section-title gradient-text">
        Projects
      </h2>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div
            key={index}
            className="project-card"
          >

            {/* HEADER */}

            <div className="project-header">

              <div>

                <h3 className="project-title">
                  {project.title}
                </h3>

                <p className="project-role">
                  {project.role}
                </p>

              </div>

              <span className="project-duration">
                {project.duration}
              </span>

            </div>

            {/* OVERVIEW */}

            <p className="project-overview">
              {project.overview}
            </p>

            {/* TECH STACK */}

            <div className="project-tech">

              {project.tech.map((tech, idx) => (

                <span
                  key={idx}
                  className="tech-badge"
                >
                  {tech}
                </span>

              ))}

            </div>

            {/* ACHIEVEMENTS */}

            <div className="project-achievements">

              {project.achievements.map((item, idx) => (

                <div
                  key={idx}
                  className="achievement-item"
                >

                  <span className="check-icon">
                    ✓
                  </span>

                  <p>
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Projects;