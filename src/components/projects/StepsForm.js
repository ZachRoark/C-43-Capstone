import React, { useContext, useEffect, useState } from "react"
import { StepsContext } from "./StepsProvider"
import { useHistory, useParams } from "react-router-dom"
import "./Steps.css"

export const StepsForm = ({step, setCurrentStep}) => {
    const { addSteps, getStepsById, editSteps, getSteps, } = useContext(StepsContext)
    const { stepName, id, summary, estimateTime, referenceImg} = step;
    const [isLoading, setIsLoading] = useState(false)
    const {StepsId} = useParams()
    const history = useHistory()


    const handleControlledInputChange = (event) => {
        const newSteps = {...step}
        newSteps[event.target.title] = event.target.value
        setCurrentStep(newSteps)
    }


    // useEffect(() => {
    //     getSteps().then(() => {
    //         if(StepsId) {
    //             getStepsById(StepsId)
    //             .then(steps => {
    //                 setCurrentStep(steps)
    //                 setIsLoading(false)
    //             })
    //         }else {
    //             setIsLoading(false)
    //         }
    //     })
    // }, [getSteps, getStepsById, setCurrentStep, setIsLoading, StepsId, step])


    const constructStepsObject = () => {
        if(parseInt(step.stepName) === 0) {
            // window.alert("Select a step")
        } else {
            setIsLoading(true)
            if(step.id){
                console.log("edit thing")
                editSteps({
                    id: step.id,
                    stepName: step.stepName,
                    summary: step.summary,
                    estimateTime: step.estimateTime,
                    complete: step.complete,
                    userId: parseInt(step.userId)
                })
                .then(() => setCurrentStep({}))
                .then(() => history.push("/steps"))
                // .then(() => console.log("Updating Step: ", StepsId))
            }else {
                addSteps({
                    stepName: step.stepName,
                    summary: step.summary,
                    estimateTime: step.estimateTime,
                    complete: step.complete = false,
                    userId: parseInt(localStorage.getItem("craftit_user"))
                })
                .then(() => setCurrentStep({}))
                .then(() => history.push("/steps"))
                // .then(() => console.log("Adding new Step"))
            }
        }
    }


    return (
        <form className="stepsForm">
            <h2 className="stepsForm">{step && id ? "Edit Step:" : "Create Step:"}</h2>

            <fieldset>
                <div className="from-group">
                    <label htmlFor="stepName">Step Name:</label>
                    <input type="text" id="stepName" title="stepName" required autoFocus className="from-control"
                    placeholder="Enter Step Name"
                    onChange={handleControlledInputChange}
                    defaultValue={stepName}/>
                </div>
            </fieldset>

            <fieldset>
                <div className="from-group">
                    <label htmlFor="stepsSummary">Summary:</label>
                    <input type="text" id="stepsSummary" title="summary" required autoFocus className="from-control"
                    placeholder="Enter Summary"
                    onChange={handleControlledInputChange}
                    defaultValue={summary}/>
                </div>
            </fieldset>

            <fieldset>
                <div className="from-group">
                    <label htmlFor="estimateTime">Estimated Time:</label>
                    <input type="text" id="estimateTime" title="estimateTime" required autoFocus className="from-control"
                    placeholder="Enter Estimated Time"
                    onChange={handleControlledInputChange}
                    defaultValue={estimateTime}/>
                </div>
            </fieldset>

            <fieldset>
                <div className="from-group">
                    <label htmlFor="stepReferenceImg">Media Reference:</label>
                    <input type="text" id="stepReferenceImg" title="stepReferenceImg" required autoFocus className="from-control"
                    placeholder="Enter Reference Media"
                    onChange={handleControlledInputChange}
                    defaultValue={referenceImg}/>
                </div>
            </fieldset>

            <button type="submit" 
                className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() 
                    constructStepsObject()
                }}>
            {step && id ? "Save Step" : "Create Step"}</button>
        </form>
    )
}