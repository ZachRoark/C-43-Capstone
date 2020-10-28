import React, { useContext, useEffect } from "react"
import { StepsContext } from "./StepsProvider"
import { useParams, useHistory } from "react-router-dom"
// import "./Steps.css"

export const StepsDetail = ({prep, setCurrentStep}) => {
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
		<section className="steps">
			<h3 className="stepName">{prep.stepName}</h3>
            <div className="stepsSummary">{prep.summary}</div>
            <div className="estimateTime">{prep.estimateTime}</div>
            <div className="stepsImg">{prep.referenceImg}</div>
			
            
            <button onClick={() => {
				deleteSteps(prep.id)
				
					.then(() => {
						console.log(prep, prep.id, "delete button")
						history.push(`/steps`)
					})
				}}>Delete Step 
			</button>


			<button onClick={() => {
				history.push(`/steps/edit/${prep.id}`)
			}}>Edit
			</button>


            {/* <button onClick={
				() => {
					completeSteps(prep.id)
						.then(() => {
							history.push("/steps")
						})
				}}>Step Complete 
			</button> */}
		</section>
	)
}