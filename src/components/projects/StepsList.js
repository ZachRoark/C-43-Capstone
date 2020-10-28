import React, { useContext, useEffect, useState } from "react"
import { StepsContext } from "./StepsProvider"
import { StepsCard } from "./StepsCard"
import { useHistory } from "react-router-dom"
// import "./Steps.css"

export const StepsList = () => {
    console.log("stepslist stepslist")
    const { steps, getSteps, searchTerms } = useContext(StepsContext)
    const [ filteredSteps, setFilteredSteps ] = useState([])
    const history = useHistory()

    useEffect(() => {
        getSteps()
    }, [])

    
    useEffect(() => {
        if(searchTerms !== "") {
            const subset = steps.filter(step => step.stepName.toLowerCase().includes(searchTerms.toLowerCase().trim()))
            setFilteredSteps(subset)
            console.log(subset)
        } else {
            setFilteredSteps(steps)
            console.log("else stepslist")
        }
    }, [searchTerms, steps])


    return (
        <>
            <h2>Steps</h2>
            <button onClick={() => {history.push("/steps/create")}}>
                Create Step
            </button>

            <div className="steps">
                {
                    filteredSteps.map((steps, index) => {
                        return <StepsCard key={steps.id} steps={steps} index={index}/>
                        })
                }
            </div>
        </>
    )
}
