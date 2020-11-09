import React, { useState, useContext, useEffect } from "react"
import { ProjectsContext } from "./ProjectsProvider"
import { useParams, useHistory } from "react-router-dom"


export const ProjectsDetail = ({project, setCurrentProject}) => {
	const { getProjectsById , deleteProjects} = useContext(ProjectsContext)
	const { projectsId } = useParams();
	const history = useHistory();
	
	const { editProjects } = useContext(ProjectsContext)
    const [completeProject, setCompleteProject] = useState(project.complete)
    const [publicProject, setPublicProject] = useState(project.public)
    
    const handleCompleteProjects = () => {
        const changedComplete = !completeProject
        setCompleteProject(changedComplete)
        project.complete = changedComplete
        editProjects(project)
    }

    const handlePublicProjects = () => {
        const changedPublic = !publicProject
        setPublicProject(changedPublic)
        project.public = changedPublic
        editProjects(project)
	}
	
	useEffect(() => {
		getProjectsById(projectsId)
			.then((response) => {
				setCurrentProject(response)
			})
	}, [projectsId, getProjectsById, setCurrentProject])


	return (
		<section className="editDeleteProjectsCard">

			<h3 className="projectName">{project.name}</h3>
            <div className="projectsSummary">Summary: {project.summary}</div>
            <div className="estimateTime">How long should this take? {project.estimateTime}</div>


			<div className="CompleteBox">
				<input type="checkbox" id="completed" name="completed" checked={completeProject}
					onChange={handleCompleteProjects}/>
				<label htmlFor="completed">Project Complete?</label>
			</div>


			<div className="PublicBox">
				<input type="checkbox" id="public" name="public" checked={publicProject}
					onChange={handlePublicProjects}/>
				<label htmlFor="public">Public?</label>
			</div>

			<div className="delete Button">
				<button onClick={() => {
					deleteProjects(project.id)				
						.then(() => {
							history.push(`/projects`)
						})
					}}>Delete Project 
				</button>
			</div>

			<div className="Edit Button">
				<button onClick={() => {
					history.push(`/projects/edit/${project.id}`)
				}}>Edit
				</button>
			</div>

		</section>
	)
}