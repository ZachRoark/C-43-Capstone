import React, { useContext, useEffect, useState, } from "react"
import { ProjectsContext } from "./ProjectsProvider"
import { ProjectsCard } from "./ProjectsCard"
import { useHistory } from "react-router-dom"
import "./Projects.css"

export const ProjectsList = () => {
    const { projects, getProjects} = useContext(ProjectsContext)
    const [filteredProjects, setFilteredProjects] = useState([])   
    const history = useHistory()

    
    useEffect(() => {
        getProjects()
    }, [])

    useEffect(() => {
        const user = parseInt(localStorage.getItem("craftit_user"))
        const usersProjects = projects.filter(projects => projects.complete === false &&  projects.userId === user)

        setFilteredProjects(usersProjects)
    }, [projects, setFilteredProjects])


    return (
        <>
            <div className="newProjectButton">
            <button onClick={() => {history.push("/projects/create")}}>
                New Project
            </button>
            </div>

            <h2 className="currentProjectsBox">Current Projects:</h2>

            <div className="currentProjectsListReturn">
                {filteredProjects.map((projects, index, ) => {                       
                    return <ProjectsCard 
                        key={projects.id} 
                        projects={projects} 
                        index={index}
                    />
                })
                }               
            </div>
        </>
    )
}
