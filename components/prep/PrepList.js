import React, { useContext, useEffect, useState } from "react"
import { PrepContext } from "./PrepProvider"
import { PrepCard } from "./PrepCard"
import { useHistory } from "react-router-dom"


export const PrepList = ({projects}) => {
    const { prep, getPrep } = useContext(PrepContext)
    const [ filteredPrep, setFilteredPrep ] = useState([])
    const history = useHistory()

    useEffect(() => {
        getPrep()
    }, [])


    useEffect(() => {
        if(!projects) return
        const projectPrep = prep.filter(prep => prep.projectId === projects.id)
        setFilteredPrep(projectPrep)
    }, [prep, setFilteredPrep, projects])


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
