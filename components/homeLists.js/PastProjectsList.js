import React, { useContext, useEffect, useState, } from "react"
import { useHistory } from "react-router-dom"
import { ProjectsContext } from "../projects/ProjectsProvider"
import { ProjectsCard } from "../projects/ProjectsCard"


export const PastProjectList = () => {
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
        const archivedProjects = projects.filter(projects => projects.public === true)/*this variable (projectSteps) filters the steps by project Id */
        setFilteredProjects(archivedProjects)
    }, [projects, setFilteredProjects])


return (
    <>
        <h2>Archived Projects:</h2>

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