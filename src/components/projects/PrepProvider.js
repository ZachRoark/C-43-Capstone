import React, { createContext, useState } from "react"

export const PrepContext = createContext();

export const PrepProvider = (props) => {
    const [prep, setPrep] = useState([]);
    const [searchTerms, setSearchTerms] = useState("");

    const getPrep = () => {
        console.log ("get prep (PrepProvider)")
        return fetch(`http://localhost:8088/prep`)
            .then(response => response.json())
            .then(setPrep)
    }

    const addPrep = (x) => {
        return fetch(`http://localhost:8088/prep`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(x)
        })
            .then(getPrep)
    }

    const getPrepById = (id) => {
        return fetch(`http://localhost:8088/prep/${id}?_expand=user`)
            .then(response => response.json())
    }

    const deletePrep = prepId => {
        console.log("delete prep (prep provider)")
        return fetch(`http://localhost:8088/prep/${prepId}`, {
            method: "DELETE"
        })
        .then(getPrep)
    }

    const editPrep = prep => {
        return fetch(`http://localhost:8088/prep/${prep.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(prep)
        })
            .then(getPrep)
    }

    return (
        <PrepContext.Provider value={{
            prep, getPrep, editPrep, deletePrep, addPrep, getPrepById, setSearchTerms, searchTerms
        }}>
            {props.children}
        </PrepContext.Provider>
    )
}
