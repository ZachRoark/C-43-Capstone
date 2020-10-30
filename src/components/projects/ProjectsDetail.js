import React, { useContext, useEffect } from "react"
import { ProjectsContext } from "./ProjectsProvider"
import { useParams, useHistory } from "react-router-dom"
// import "./Projects.css"

export const ProjectsDetail = ({project, setCurrentProject}) => {
	const { getProjectsById , deleteProjects} = useContext(ProjectsContext)
	const { projectsId } = useParams();
	const history = useHistory();
	

	useEffect(() => {
		getProjectsById(projectsId)
			.then((response) => {
				setCurrentProject(response)
			})
	}, [projectsId, getProjectsById, setCurrentProject])


	return (
		<section className="editDeleteProjectsCard">
			<h3 className="projectName">{project.name}</h3>
            <div className="projectsSummary">{project.summary}</div>
            <div className="estimateTime">{project.estimateTime}</div>

			
            
            <button onClick={() => {
				deleteProjects(project.id)				
					.then(() => {
						history.push(`/projects`)
					})
				}}>Delete Project 
			</button>


			<button onClick={() => {
				history.push(`/projects/edit/${project.id}`)
			}}>Edit
			</button>

		</section>
	)
}