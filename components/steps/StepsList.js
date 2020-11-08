import React, { useContext, useEffect, useState } from "react"
import { StepsContext } from "./StepsProvider"
import { StepsCard } from "./StepsCard"
import { useHistory } from "react-router-dom"
// import "./Steps.css"

export const StepsList = () => {
    // This state changes when `getSteps()` is invoked below
    const { steps, getSteps} = useContext(StepsContext)
    const [filteredSteps, setFilteredSteps] = useState([])
    
    const history = useHistory()
    
        /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
        */
    useEffect(() => {
        getSteps()
    }, [getSteps])

    useEffect(() => {
        const user = parseInt(localStorage.getItem("craftit_user"))
// Filter steps and prep by project id, and project by user id. there isn't a point in filtering one by both
        // const project = parseInt(localStorage.getItem("craftit_user"))
        /*
            this variable (userSteps) filters the steps by project Id
        */
        const usersSteps = steps.filter(step => step.userId === user) /* step.projectId === project)*/
        setFilteredSteps(usersSteps)
    }, [getSteps, setFilteredSteps])


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
                            index={index}/>
                    })
                }
            </div>
        </>
    )
}
