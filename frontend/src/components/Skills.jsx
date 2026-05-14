function Skills() {

  const skillGroups = [

    {
      title:"Backend",
      items:["Java","Spring Boot","Microservices","REST APIs","Spring Security (JWT, OAuth2),"]
    },

    {
      title:"Frontend",
      items:["React.js","Angular","JavaScript","HTML","CSS"]
    },

    {
      title:"Cloud & DevOps",
      items:["AWS","Docker","Jenkins","CI/CD","Git","GitHub"]
    },

    {
      title:"Database",
      items:["MySQL","PostgreSQL"]
    }

  ]

  return (

    <section id="skills">

      <h2 className="section-title gradient-text">
        Technical Skills
      </h2>

      <div className="skills-grid">

        {skillGroups.map((group,index)=>(

          <div key={index} className="card">

            <h3>{group.title}</h3>

            <div className="skill-tags">

              {group.items.map((item,idx)=>(

                <span key={idx} className="skill-tag">
                  {item}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>

  )
}

export default Skills