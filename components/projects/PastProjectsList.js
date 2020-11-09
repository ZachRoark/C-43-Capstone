import React, { useContext, useEffect, useState, } from "react"
import { useHistory } from "react-router-dom"
import { ProjectsContext } from "./ProjectsProvider"
import { ProjectsCard } from "./ProjectsCard"


export const PastProjectsList = () => {
    // This state changes when `getProjects()` is invoked below
    const { projects, getProjects} = useContext(ProjectsContext)
    const [filteredProjects, setFilteredProjects] = useState([])
    const history = useHistory()
    

    useEffect(() => {
        getProjects()
    }, [])

    // useEffect(() => {
    //     const user = parseInt(localStorage.getItem("craftit_user"))
    //     const usersSteps = steps.filter(step => step.userId === user)/*this variable (userSteps) filters the steps by user*/
    //     setFilteredSteps(usersSteps)
    // }, [steps, setFilteredSteps])

    useEffect(() => {
        if(!projects) return
        const user = parseInt(localStorage.getItem("craftit_user"))
        const archivedProjects = projects.filter(projects => projects.complete === true &&  projects.userId === user)/*this variable (projectSteps) filters the steps by project Id */
        setFilteredProjects(archivedProjects)
    }, [projects, setFilteredProjects])


return (
    <>
        <h2>Completed Projects:</h2>

        <div className="projectsListReturn">
            {
                filteredProjects.map((projects, index) => {
                    
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