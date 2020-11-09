import React, { useContext, useState } from "react"
import { PrepContext } from "./PrepProvider"
import { useHistory } from "react-router-dom"


export const PrepForm = ({prep, setCurrentPrep, projects, setCurrentProject}) => {
    const { addPrep, editPrep, } = useContext(PrepContext)
    const { prepName, id } = prep;
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()


    const handleControlledInputChange = (event) => {
        const newPrep = {...prep}
        newPrep[event.target.title] = event.target.value
        setCurrentPrep(newPrep)
    }
    
    const constructPrepObject = () => {
        if(parseInt(prep.prepName) === 0) {
        } else {
            setIsLoading(true)
            if(prep.id){
                editPrep({
                    id: prep.id,
                    prepName: prep.prepName,
                    userId: parseInt(prep.userId),
                    projectId: parseInt(projects.id)
                })
                .then(() => setCurrentPrep({}))
                .then(() => history.push(`/projects/detail/${projects.id}`))
            }else {
                addPrep({
                    prepName: prep.prepName,
                    userId: parseInt(localStorage.getItem("craftit_user")),
                    projectId: parseInt(projects.id)
                })
                .then(() => setCurrentPrep({}))
                .then(() => setCurrentProject({}))
                .then(() => history.push(`/projects/detail/${projects.id}`))
            }
        }
    }


    return (
        <form className="prepForm">
            <h2 className="prepForm">{prep && id ? "Edit" : "Create Prep:"}</h2>

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
            {prep && id ? "Save" : "Add"}</button>
        </form>
    )
}