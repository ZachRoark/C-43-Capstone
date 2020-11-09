import React, { useContext, useEffect, useState, } from "react"
import { StepsContext } from "./StepsProvider"
import { StepsCard } from "./StepsCard"
import { useHistory } from "react-router-dom"
// import "./Steps.css"

export const StepsList = ({projects}) => {
    // This state changes when `getSteps()` is invoked below
    const { steps, getSteps} = useContext(StepsContext)
    const [filteredSteps, setFilteredSteps] = useState([])
    const history = useHistory()
    
    useEffect(() => {
        getSteps()
    }, [])


    useEffect(() => {
        if(!projects) return
        const projectSteps = steps.filter(step => step.projectId === projects.id)/*this variable (projectSteps) filters the steps by project Id */
        setFilteredSteps(projectSteps)
    }, [steps, setFilteredSteps, projects])


    return (
        <>
            <h2>Steps:</h2>
            <button onClick={() => {history.push("/steps/create")}}>
                Create A Step
            </button>

            <div className="stepsListReturn">
                {
                    filteredSteps.map((steps, index, ) => {
                        
                            return <StepsCard 
                            key={steps.id} 
                            steps={steps} 
                            index={index}
                        />
                        
                        })
                }
                
            </div>
        </>
    )
}