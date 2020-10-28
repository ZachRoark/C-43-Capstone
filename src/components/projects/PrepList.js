import React, { useContext, useEffect, useState } from "react"
import { PrepContext } from "./PrepProvider"
import { PrepCard } from "./PrepCard"
import { useHistory } from "react-router-dom"
// import "./Steps.css"

export const PrepList = () => {
    console.log("preplist preplist")
    const { prepObj, getPrep, searchTerms } = useContext(PrepContext)
    const [ filteredPrep, setFilteredPrep ] = useState([])
    const history = useHistory()

    useEffect(() => {
        getPrep()
    }, [])


    useEffect(() => {
        if(searchTerms !== "") {
            const subset = prepObj.filter(prepObj => prepObj.prepName.toLowerCase().includes(searchTerms.toLowerCase().trim()))
            setFilteredPrep(subset)
            console.log(subset)
        } else {
            setFilteredPrep(prepObj)
            console.log("else prepList")
        }
    }, [searchTerms, prepObj])


    return (
        <>
            <h2>Prep</h2>
            <button onClick={() => {history.push("/prep/create")}}>
                Create Prep
            </button>

            <div className="prepObj">
                {
                    filteredPrep.map((prepObj, index) => {
                        return <PrepCard key={prepObj.id} prepObj={prepObj} index={index}/>
                        })
                }
            </div>
        </>
    )
}
