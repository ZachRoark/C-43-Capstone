import React, { useContext, useEffect, useState } from "react"
import { StepsContext } from "./StepsProvider"
import { useHistory, useParams } from "react-router-dom"
import "./Steps.css"

export const StepsForm = ({prep, setCurrentStep}) => {
    const { addSteps, getStepsById, editSteps, getSteps, } = useContext(StepsContext)
    const { stepName, id, summary, estimateTime, referenceImg} = prep;
    const [isLoading, setIsLoading] = useState(false)
    const {StepsId} = useParams()
    const history = useHistory()


    const handleControlledInputChange = (event) => {
        const newSteps = {...prep}
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
    // }, [getSteps, getStepsById, setCurrentStep, setIsLoading, StepsId, prep])


    const constructStepsObject = () => {
        if(parseInt(prep.stepName) === 0) {
            // window.alert("Select a prep")
        } else {
            setIsLoading(true)
            if(prep.id){
                console.log("edit thing")
                editSteps({
                    id: prep.id,
                    stepName: prep.stepName,
                    summary: prep.summary,
                    estimateTime: prep.estimateTime,
                    complete: prep.complete,
                    userId: parseInt(prep.userId)
                })
                .then(() => setCurrentStep({}))
                .then(() => history.push("/steps"))
                // .then(() => console.log("Updating Step: ", StepsId))
            }else {
                addSteps({
                    stepName: prep.stepName,
                    summary: prep.summary,
                    estimateTime: prep.estimateTime,
                    complete: prep.complete = false,
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
            <h2 className="stepsForm">{prep && id ? "Edit Step:" : "Create Step:"}</h2>

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
            {prep && id ? "Save Step" : "Create Step"}</button>
        </form>
    )
}