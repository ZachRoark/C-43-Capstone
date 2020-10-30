import React, { useState, useContext } from "react"
import {Link} from "react-router-dom"
import { StepsContext } from "./StepsProvider"
// import "./Steps.css"




export const StepsCard = ({ steps, index }) => {
    const { editSteps } = useContext(StepsContext)
    const [completeStep, setCompleteStep] = useState(steps.complete)
    const handleCompleteStep = () => {
        const changedComplete = !completeStep
        setCompleteStep(changedComplete)
        steps.complete = changedComplete
        editSteps(steps)
    }

    return (
    <section className="stepsCard">
        <Link to={`/steps/detail/${steps.id}`}>
            Step {index +1}:_{ steps.stepName }
        </Link>

        <div className="stepsSummary">Summary : { steps.summary }</div>
        <div className="estimateTime">How long does it take?  { steps.estimateTime } hour(s)</div>
        <div className="stepsImg">{ steps.referenceImg }</div>

        <input type="checkbox" id="completed" name="completed" checked={completeStep} 
            onChange={handleCompleteStep}
        />
        <label htmlFor="completed">Step Complete?</label>
        

    </section>
)}


