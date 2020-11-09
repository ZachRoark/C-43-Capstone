import React, { useContext, useEffect, useState, } from "react"
import { useHistory } from "react-router-dom"
import { ProjectsContext } from "./ProjectsProvider"
import { ProjectsCard } from "./ProjectsCard"


export const PastProjectsList = () => {
    const { projects, getProjects} = useContext(ProjectsContext)
    const [filteredProjects, setFilteredProjects] = useState([])
    const history = useHistory()
    

    useEffect(() => {
        getProjects()
    }, [])


    useEffect(() => {
        if(!projects) return
            const user = parseInt(localStorage.getItem("craftit_user"))
            const archivedProjects = projects.filter(projects => projects.complete === true &&  projects.userId === user)/*this variable (projectSteps) filters the steps by project Id */
            
            setFilteredProjects(archivedProjects)
    }, [projects, setFilteredProjects])


    return (
        <>
            <h2 className="pastProjectsBox">Completed Projects:</h2>

            <div className="pastProjectsListReturn">
                {filteredProjects.map((projects, index) => {
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