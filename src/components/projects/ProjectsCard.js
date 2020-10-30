import React, { useState, useContext } from "react"
import {Link} from "react-router-dom"
import { ProjectsContext } from "./ProjectsProvider"
// import "./Projects.css"




export const ProjectsCard = ({ projects, index }) => {
    const { editProjects } = useContext(ProjectsContext)
    const [completeProject, setCompleteProject] = useState(projects.complete)
   
    const handleCompleteProjects = () => {
        const changedComplete = !completeProject
        setCompleteProject(changedComplete)
        projects.complete = changedComplete
        editProjects(projects)
    }

    return (
    <section className="projectsCard">
        <Link to={`/projects/detail/${projects.id}`}>{ projects.projectName }
        </Link>

        {/* <div className="prepBox"> Prep{ projects.summary }</div> */}
        <div className="stepsBox">Steps  { projects.estimateTime } hour(s)</div>
        <div className="CompleteBox">{ projects.referenceImg }</div>

        <input type="checkbox" id="completed" name="completed" checked={completeProject} 
            onChange={handleCompleteProjects}
        />
        <label htmlFor="completed">Project Complete?</label>
        

    </section>
)}


