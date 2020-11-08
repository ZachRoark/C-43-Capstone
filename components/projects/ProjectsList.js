import React, { useContext, useEffect, useState, } from "react"
import { ProjectsContext } from "./ProjectsProvider"
import { ProjectsCard } from "./ProjectsCard"
import { useHistory } from "react-router-dom"
// import "./Projects.css"

export const ProjectsList = () => {
    // This state changes when `getProjects()` is invoked below
    const { projects, getProjects} = useContext(ProjectsContext)
    const [filteredProjects, setFilteredProjects] = useState([])
    
    const history = useHistory()
    
        /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
        */
    useEffect(() => {
        getProjects()
    }, [])

    useEffect(() => {
        const user = parseInt(localStorage.getItem("craftit_user"))
        const usersProjects = projects.filter(project => project.userId === user)
        setFilteredProjects(usersProjects)
        console.log(usersProjects, 'user')
    }, [projects, setFilteredProjects])


    return (
        <>
            <h2>Projects:</h2>
            <button onClick={() => {history.push("/projects/create")}}>
                Create A Project
            </button>

            <div className="projectsListReturn">
                {
                    filteredProjects.map((projects, index, ) => {
                        
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
