import React, { useContext, useEffect, useState, } from "react"
import { StepsContext } from "./StepsProvider"
import { StepsCard } from "./StepsCard"
import { useHistory } from "react-router-dom"
// import "./Steps.css"

export const StepsList = () => {
    const { steps, getSteps} = useContext(StepsContext)
    const [filteredSteps, setFilteredSteps] = useState([])
    
    const history = useHistory()
    
    useEffect(() => {
        getSteps()
    }, [])

    useEffect(() => {
        const user = parseInt(localStorage.getItem("craftit_user"))
        const usersSteps = steps.filter(step => step.userId === user)
        setFilteredSteps(usersSteps)
    }, [steps, setFilteredSteps])


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
