import React, { useContext, useEffect } from "react"
import { StepsContext } from "./StepsProvider"
import { useParams, useHistory } from "react-router-dom"
// import "./Steps.css"

export const StepsDetail = ({step, setCurrentStep, projects, setCurrentProject}) => {
	const { getStepsById , deleteSteps} = useContext(StepsContext)
	const { stepsId } = useParams();
	const history = useHistory();
	

	useEffect(() => {
		getStepsById(stepsId)
			.then((response) => {
				setCurrentStep(response)
			})
	}, [stepsId, getStepsById, setCurrentStep])


	return (
		<section className="editDeleteStepsCard">
			<h3 className="stepName">{step.stepName}</h3>
            <div className="stepsSummary">{step.summary}</div>
            <div className="estimateTime">{step.estimateTime}</div>
            <div className="stepsImg">{step.referenceImg}</div>		
            
            <button onClick={() => {
				deleteSteps(step.id)
				.then(() => setCurrentProject({}))				
				.then(() => {history.push(`/projects/detail/${projects.id}`)})
			}}>Delete Step 
			</button>

			<button onClick={() => {
				history.push(`/steps/edit/${step.id}`)
			}}>Edit
			</button>

		</section>
	)
}