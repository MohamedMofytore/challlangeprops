import React from 'react'

function Projects(props) {
    
  return (
   
      
    <section id="projects">
         <h2 class="text-important">Projects</h2>
         <div class="projects-container">
            {props.tab.map((el)=>(
                 <div class="project-card">
                 <img src={el.image} alt="project" />
                 <h3>{el.titre}</h3>
                 <p>
                 {el.description}
                 </p>
                 <p><a href="#">{el.link}</a></p>
               </div>
            ))}
         </div>
        </section>
  )
}

export default Projects
