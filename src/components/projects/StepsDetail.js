import React, { useContext, useEffect } from "react"
import { StepsContext } from "./StepsProvider"
import { useParams, useHistory } from "react-router-dom"
// import "./Steps.css"

export const StepsDetail = ({step, setCurrentStep}) => {
	console.log("stepsdetail #1(stepsdetail)")
	const { getStepsById , deleteSteps} = useContext(StepsContext)
	console.log("stepsdetail #2(stepsdetail)")
	const { stepsId } = useParams();
	const history = useHistory();
	

	useEffect(() => {
		console.log("useeffect (stepsdetail)")
		getStepsById(stepsId)
			.then((response) => {
				setCurrentStep(response)
			})
	}, [stepsId])


	return (
		<section className="stepsCard">
			<h3 className="stepName">{step.stepName}</h3>
            <div className="stepsSummary">{step.summary}</div>
            <div className="estimateTime">{step.estimateTime}</div>
            <div className="stepsImg">{step.referenceImg}</div>
			
            
            <button onClick={() => {
				deleteSteps(step.id)
				
					.then(() => {
						console.log(step, step.id, "delete button")
						history.push(`/steps`)
					})
				}}>Delete Step 
			</button>


			<button onClick={() => {
				history.push(`/steps/edit/${step.id}`)
			}}>Edit
			</button>


            {/* <button onClick={
				() => {
					completeSteps(step.id)
						.then(() => {
							history.push("/steps")
						})
				}}>Step Complete 
			</button> */}
		</section>
	)
}