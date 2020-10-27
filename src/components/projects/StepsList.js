import React, { useContext, useEffect, useState } from "react"
import { StepsContext } from "./StepsProvider"
import { StepsCard } from "./StepsCard"
import { useHistory } from "react-router-dom"
import "./Steps.css"

export const StepsList = () => {
    const { steps, getSteps, searchTerms } = useContext(StepsContext)
    const [ filteredSteps, setFilteredSteps ] = useState([])
    const history = useHistory()

    useEffect(() => {
        getSteps()
    }, [])


// o0o0oo0o0o0o0o0o0o0o0o00oo0o0o0o0o0
// o0o0oo0o0o0o0o0o0o0o0o00oo0o0o0o0o0
// o0o0oo0o0o0o0o0o0o0o0o00oo0o0o0o0o0

// written here to not forget
// when looping through the array of api objects, precede step name with "step" (array id +1)
// figure out where and how to write that, brain fog currently activated
    useEffect(() => {
        if(searchTerms !== "") {
            const subset = steps.filter(step => step.stepName.toLowerCase().includes(searchTerms.toLowerCase().trim()))
            setFilteredSteps(subset)
        } else {
            setFilteredSteps(steps)
        }
    }, [searchTerms, steps])

// o0o0oo0o0o0o0o0o0o0o0o00oo0o0o0o0o0
// o0o0oo0o0o0o0o0o0o0o0o00oo0o0o0o0o0
// o0o0oo0o0o0o0o0o0o0o0o00oo0o0o0o0o0

// written here to not forget
// when looping through the array of api objects, precede step name with "step" (array id +1)
// figure out where and how to write that, brain fog currently activated
    return (
        <>
            <h2>Steps</h2>
            <button onClick={() => {history.push("/steps/create")}}>
                Create Step
            </button>

            <div className="steps">
                {
                    filteredSteps.map(steps => {
                        return <StepsCard key={steps.id} steps={steps} />
                        })
                }
            </div>
        </>
    )
}
// o0o0oo0o0o0o0o0o0o0o0o00oo0o0o0o0o0
// o0o0oo0o0o0o0o0o0o0o0o00oo0o0o0o0o0
// o0o0oo0o0o0o0o0o0o0o0o00oo0o0o0o0o0