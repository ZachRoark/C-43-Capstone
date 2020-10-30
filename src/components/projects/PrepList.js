import React, { useContext, useEffect, useState } from "react"
import { PrepContext } from "./PrepProvider"
import { PrepCard } from "./PrepCard"
import { useHistory } from "react-router-dom"
// import "./Steps.css"

export const PrepList = () => {
    console.log("preplist preplist")
    const { prep, getPrep, searchTerms } = useContext(PrepContext)
    const [ filteredPrep, setFilteredPrep ] = useState([])
    const history = useHistory()

    useEffect(() => {
        getPrep()
    }, [getPrep])


    useEffect(() => {
        if(searchTerms !== "") {
            const subset = prep.filter(prep => prep.prepName.includes(searchTerms.trim()))
            setFilteredPrep(subset)
        } else {
            setFilteredPrep(prep)
        }
    }, [searchTerms, prep])


    return (
        <>
            <h2>Before you get started, what do you need?</h2>
            <button onClick={() => {history.push("/prep/create")}}>
                Add Materials/Tools
            </button>

            <div className="prep">
                {
                    filteredPrep.map((prep, index) => {
                        return <PrepCard key={prep.id} prep={prep} index={index}/>
                        })
                }
            </div>
        </>
    )
}
