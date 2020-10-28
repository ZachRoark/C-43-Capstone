import React, { useContext, useEffect, useState } from "react"
import { PrepContext } from "./PrepProvider"
import { useHistory, useParams } from "react-router-dom"
// import "./Steps.css"

export const PrepForm = ({prepObj, setCurrentPrep}) => {
    const { addPrep, getPrepById, editPrep, getPrep, } = useContext(PrepContext)
    const { prepName, id, summary, estimateTime, referenceImg } = prepObj;
    const [isLoading, setIsLoading] = useState(false)
    const {PrepId} = useParams()
    const history = useHistory()


    const handleControlledInputChange = (event) => {
        const newPrep = {...prepObj}
        newPrep[event.target.title] = event.target.value
        setCurrentPrep(newPrep)
    }
    
    const constructPrepObject = () => {
        if(parseInt(prepObj.prepName) === 0) {
        } else {
            setIsLoading(true)
            if(prepObj.id){
                console.log("edit thing")
                editPrep({
                    id: prepObj.id,
                    prepName: prepObj.prepName,
                    userId: parseInt(prepObj.userId)
                })
                .then(() => setCurrentPrep({}))
                .then(() => history.push("/prep"))
            }else {
                addPrep({
                    prepName: prepObj.prepName,
                    userId: parseInt(localStorage.getItem("craftit_user"))
                })
                .then(() => setCurrentPrep({}))
                .then(() => history.push("/prep"))
            }
        }
    }


    return (
        <form className="prepForm">
            <h2 className="prepForm">{prepObj && id ? "Edit Prep:" : "Create Prep:"}</h2>

            <fieldset>
                <div className="from-group">
                    <label htmlFor="prepName">Prep Name:</label>
                    <input type="text" id="prepName" title="prepName" required autoFocus className="from-control"
                    placeholder="Enter Prep Name"
                    onChange={handleControlledInputChange}
                    defaultValue={prepName}/>
                </div>
            </fieldset>



            <button type="submit" 
                className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() 
                    constructPrepObject()
                }}>
            {prepObj && id ? "Save Prep" : "Create Prep"}</button>
        </form>
    )
}