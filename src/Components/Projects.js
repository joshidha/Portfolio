import React from 'react';
import '../StyleSheets/projects.css';
import GitHubIcon from '@mui/icons-material/GitHub';
const Projects = () => {
  const projects=[
      {
            heading:"NoteBook App",
            description:"Notebook app frontend built using React.js.",
            githublink:"https://github.com/joshidha/notebook"
      },
      {
        heading:"NoteBook App Backend",
        description:"Notebook application backend built using Node.js and MongoDb.",
        githublink:"https://github.com/joshidha/NotebookBackend"
      },
      {
        heading:"Password Generator",
        description:"A random password generator web appliction built using ReactJS.",
        githublink:"https://github.com/joshidha/PasswordGenerator"
      }
  ]
  return (
    <div className="project-page">
        <h1 className="projects-head" data-testid="projectHeading"> Projects </h1>
        <div id='projects' data-testid="projectCard">
        {projects.map((p)=>{
            return (
                <div className="p" key={p.githublink}>
                    <h1 className="p-head"> {p.heading}</h1>
                    <p className="p-desc"> {p.description}</p>
                    <a href={p.githublink} target="_main"><GitHubIcon /> </a>
                 </div>
            )
        })}
    </div>
    </div>
  )
}

export default Projects