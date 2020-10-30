import React, { useContext, useEffect } from "react"
import { PrepContext } from "./PrepProvider"
import { useParams, useHistory } from "react-router-dom"
// import "./Steps.css"

export const PrepDetail = ({prep, setCurrentPrep}) => {
	const { getPrepById , deletePrep} = useContext(PrepContext)
	const { prepId } = useParams();
	const history = useHistory();
	

	useEffect(() => {
		console.log("useeffect (prepdetail)")
		getPrepById(prepId)
			.then((response) => {
				setCurrentPrep(response)
			})
	}, [prepId, setCurrentPrep, getPrepById])


	return (
		<section className="prepCard">
			<h3 className="prepName">{prep.prepName}</h3>
            
            <button onClick={() => {
				deletePrep(prep.id)
					.then(() => {
						history.push(`/prep`)
					})
				}}>Delete 
			</button>


			<button onClick={() => {
				history.push(`/prep/edit/${prep.id}`)
			}}>Edit
			</button>
		</section>
	)
}