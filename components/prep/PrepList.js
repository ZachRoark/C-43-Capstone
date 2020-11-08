import React, { useContext, useEffect, useState } from "react"
import { PrepContext } from "./PrepProvider"
import { PrepCard } from "./PrepCard"
import { useHistory } from "react-router-dom"
// import "./Prep.css"

export const PrepList = () => {
    // This state changes when `getPrep()` is invoked below
    const { prep, getPrep } = useContext(PrepContext)
    const [ filteredPrep, setFilteredPrep ] = useState([])
    
    const history = useHistory()

        /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
        */
    useEffect(() => {
        getPrep()
    }, [getPrep])


    useEffect(() => {
        const user = parseInt(localStorage.getItem("craftit_user"))

        const usersPrep = prep.filter(prep => prep.userId === user) 
        setFilteredPrep(usersPrep)

    }, [getPrep, setFilteredPrep])


    return (
        <>
            <h2>Before you get started, what do you need?</h2>
            <button onClick={() => {history.push("/prep/create")}}>
                Add Materials/Tools
            </button>

            <div className="prepListReturn">
                {
                    filteredPrep.map((prep, index) => {
                        return <PrepCard 
                            key={prep.id} 
                            prep={prep} 
                            index={index}/>
                    })
                }
            </div>
        </>
    )
}
