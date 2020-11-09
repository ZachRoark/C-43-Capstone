import React, { useContext, useState } from "react"
import { ProjectsContext } from "./ProjectsProvider"
import { useHistory, } from "react-router-dom"
import "./Projects.css"

export const ProjectsForm = ({project, setCurrentProject}) => {
    const { addProjects, editProjects, } = useContext(ProjectsContext)
    const { projectName, id, summary, estimateTime } = project;
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()


    const handleControlledInputChange = (event) => {
        const newProjects = {...project}
        newProjects[event.target.title] = event.target.value
        setCurrentProject(newProjects)
    }

const constructProjectsObject = () => {
        if(parseInt(project.projectName) === 0) {
        } else {
            setIsLoading(true)
            if(project.id){
                editProjects({
                    id: project.id,
                    projectName: project.projectName,
                    summary: project.summary,
                    estimateTime: project.estimateTime,
                    complete: project.complete,
                    public: project.public,
                    userId: parseInt(project.userId)
                })
                .then(() => setCurrentProject({}))
                .then(() => history.push("/projects"))
            }else {
                addProjects({
                    projectName: project.projectName,
                    summary: project.summary,
                    estimateTime: project.estimateTime,
                    referenceImg: project.referenceImg,
                    complete: project.complete = false,
                    public: project.public = false,
                    userId: parseInt(localStorage.getItem("craftit_user"))
                })
                .then(() => setCurrentProject({}))
                .then(() => history.push("/projects"))
            }
        }
    }

    return (
        <form className="projectsForm">

            <h2 className="projectsForm">{project && id ? "Edit Project:" : "Create Project:"}</h2>
            {/* <div className="projectsFormUserVerify">        {project?.user?.id === parseInt(localStorage.getItem("craftit_user")) ?
            </div> */}
            <fieldset>
                <div className="from-group">
                    <label htmlFor="projectName">Project Name:</label>
                    <input type="text" id="projectName" title="projectName" required autoFocus className="from-control"
                    placeholder="Enter Project Name"
                    onChange={handleControlledInputChange}
                    defaultValue={projectName}/>
                </div>
            </fieldset>

            <fieldset>
                <div className="from-group">
                    <label htmlFor="projectsSummary">Summary:</label>
                    <input type="text" id="projectsSummary" title="summary" required autoFocus className="from-control"
                    placeholder="Enter Summary"
                    onChange={handleControlledInputChange}
                    defaultValue={summary}/>
                </div>
            </fieldset>

            <fieldset>
                <div className="from-group">
                    <label htmlFor="estimateTime">Estimated Time:</label>
                    <input type="text" id="estimateTime" title="estimateTime" required autoFocus className="from-control"
                    placeholder="Enter Estimated Time"
                    onChange={handleControlledInputChange}
                    defaultValue={estimateTime}/>
                </div>
            </fieldset>

            <button type="submit" 
                className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() 
                    constructProjectsObject()
                }}>
            {project && id ? "Save Project" : "Create Project"}</button>
        </form>
    )
}
