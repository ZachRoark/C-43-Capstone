
import React, { useState, useContext } from "react"
import {Link} from "react-router-dom"
import { ProjectsContext } from "./ProjectsProvider"
// import "./Projects.css"




export const ProjectsCard = ({ projects }) => {
    const { editProjects } = useContext(ProjectsContext)
    const [completeProject, setCompleteProject] = useState(projects.complete)
    const [publicProject, setPublicProject] = useState(projects.public)
    
    const handleCompleteProjects = () => {
        const changedComplete = !completeProject
        setCompleteProject(changedComplete)
        projects.complete = changedComplete
        editProjects(projects)
    }

    const handlePublicProjects = () => {
        const changedPublic = !publicProject
        setPublicProject(changedPublic)
        projects.public = changedPublic
        editProjects(projects)
    }

    return (
    <section className="projectsCard">
        <Link to={`/projects/detail/${projects.id}`}>{ projects.projectName }
        </Link>

        <div className="CompleteBox"></div>
        <input type="checkbox" id="completed" name="completed" checked={completeProject}
            onChange={handleCompleteProjects}
        />
        <label htmlFor="completed">Project Complete?</label>
        
        <div className="PublicBox"></div>
        <input type="checkbox" id="public" name="public" checked={publicProject}
            onChange={handlePublicProjects}
        />
        <label htmlFor="public">Public?</label>
    </section>
)}




















// project card to populate on homepage, archive (if public), and random picks (if public)