Lakshmi Portfolio Application

A modern full-stack portfolio application built using React.js, Spring Boot, Java 17, REST APIs, and Tailwind CSS.

This application showcases professional experience, technical skills, enterprise projects, and contact functionality with email integration.

- Features

Frontend Features

  - Modern responsive UI using React.js
  - Tailwind CSS styling
  - Dark theme portfolio design
  - Smooth scrolling navigation
  - Professional project showcase
  - Skills section with technology badges
  - Resume download functionality
  - Contact form integration
  - Interactive hover effects and transitions
  - Backend Features
  - Spring Boot REST APIs
  - Java 17 backend development
  - Email integration using JavaMailSender
  - Gmail SMTP configuration
  - JSON request handling
  - Layered architecture implementation
  - CORS configuration for frontend integration
  
Tech Stack

  - Frontend
  - React.js 18+
  - Vite
  - Tailwind CSS
  - JavaScript
  - HTML5
  - CSS3
  - Backend
  - Java 17
  - Spring Boot
  - Spring Web
  - Spring Mail
  - Maven
  
Project Structure

full-stack-portfolio/
│
├── backend/
│   ├── src/
│   ├── pom.xml
│   └── application.yml
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
└── README.md

Frontend Setup

Step 1 — Navigate to Frontend
		 cd frontend
		 
Step 2 — Install Dependencies
		 npm install
		 
Step 3 — Run Frontend
		 npm run dev

Frontend runs on: http://localhost:5173

Backend Setup

Step 1 — Navigate to Backend
		 cd cv
Step 2 — Build Project
		 mvn clean install
Step 3 — Run Spring Boot Application
		 mvn spring-boot:run

Backend runs on: http://localhost:8080

Email Configuration

Configure Gmail SMTP inside:

src/main/resources/application.yml

Example:

spring:
  mail:
    host: smtp.gmail.com
    port: 587
    username: your-email@gmail.com
    password: your-app-password
    properties:
      mail:
        smtp:
          auth: true
          starttls:
            enable: true
			
Important Security Note

Do NOT use your normal Gmail password.

Use:

Google App Password
Contact API
   Endpoint
   POST /api/contact
   Request Body
  {
    "name": "Lakshmi",
    "email": "lakshmi@gmail.com",
    "message": "Interested in your profile"
  }
  
  
Portfolio Sections

Home Section
About Section
Skills Section
Projects Section
Contact Section
Footer Section

Screenshots

![Home Page](./screenshots/home.png)
![About Page](./screenshots/About.png)
![Contact Page](./screenshots/Contact.png)
![Projects Page](./screenshots/Projects.png)
![Skills Page](./screenshots/Skills.png)


Author

Lakshmi L
Java Full Stack Developer

Skills
 - Java
 - Spring Boot
 - React.js
 - Angular
 - AWS
 - Docker
 - PostgreSQL
 - Microservices
 - REST APIs

License

This project is created for portfolio and learning purposes.