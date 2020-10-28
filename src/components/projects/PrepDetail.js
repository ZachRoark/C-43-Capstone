import React, { useContext, useEffect } from "react"
import { PrepContext } from "./PrepProvider"
import { useParams, useHistory } from "react-router-dom"
// import "./Steps.css"

export const PrepDetail = ({prepObj, setCurrentPrep}) => {
	console.log("prepdetail #1(prepdetail)")
	const { getPrepById , deletePrep} = useContext(PrepContext)
	console.log("prepdetail #2(prepdetail)")
	const { prepId } = useParams();
	const history = useHistory();
	

	useEffect(() => {
		console.log("useeffect (prepdetail)")
		getPrepById(prepId)
			.then((response) => {
				setCurrentPrep(response)
			})
	}, [prepId])


	return (
		<section className="prepCard">
			<h3 className="prepName">{prepObj.prepName}</h3>
            
            <button onClick={() => {
				deletePrep(prepObj.id)
				
					.then(() => {
						console.log(prepObj, prepObj.id, "delete button")
						history.push(`/prep`)
					})
				}}>Delete Prep 
			</button>


			<button onClick={() => {
				history.push(`/prep/edit/${prepObj.id}`)
			}}>Edit
			</button>
		</section>
	)
}