import React, { createContext, useState } from "react"

export const StepsContext = createContext();

export const StepsProvider = (props) => {
    const [steps, setSteps] = useState([]);
    const [searchTerms, setSearchTerms] = useState("");

    const getSteps = () => {
        console.log ("get steps (stepsprovider)")
        return fetch(`http://localhost:8088/steps`)
            .then(response => response.json())
            .then(setSteps)
    }

    const addSteps = (x) => {
        return fetch(`http://localhost:8088/steps`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(x)
        })
            .then(getSteps)
    }

    const getStepsById = (id) => {
        return fetch(`http://localhost:8088/steps/${id}?_expand=user`)
            .then(response => response.json())
    }

    const deleteSteps = stepsId => {
        console.log("delete step (steps provider)")
        return fetch(`http://localhost:8088/steps/${stepsId}`, {
            method: "DELETE"
        })
        .then(getSteps)
    }

    const editSteps = steps => {
        return fetch(`http://localhost:8088/steps/${steps.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(steps)
        })
            .then(getSteps)
    }

    return (
        <StepsContext.Provider value={{
            steps, getSteps, editSteps, deleteSteps, addSteps, getStepsById, setSearchTerms, searchTerms
        }}>
            {props.children}
        </StepsContext.Provider>
    )
}