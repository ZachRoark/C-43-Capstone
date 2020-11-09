import React, { createContext, useState } from "react"


export const ProjectsContext = createContext();

export const ProjectsProvider = (props) => {
    const [projects, setProjects] = useState([]);
    const [searchTerms, setSearchTerms] = useState("");

    const getProjects = () => {
        return fetch(`http://localhost:8088/projects`)
            .then(response => response.json())
            .then(setProjects)
    }

    const addProjects = (x) => {
        return fetch(`http://localhost:8088/projects`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(x)
        })
            .then(getProjects)
    }

    const getProjectsById = (id) => {
        return fetch(`http://localhost:8088/projects/${id}?_expand=user`)
        
            .then(response =>  response.json())
    }

    const deleteProjects = projectsId => {
        ("delete project (projects provider)")
        return fetch(`http://localhost:8088/projects/${projectsId}`, {
            method: "DELETE"
        })
        .then(getProjects)
    }

    const editProjects = projects => {
        return fetch(`http://localhost:8088/projects/${projects.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(projects)
        })
            .then(getProjects)
    }

    return (
        <ProjectsContext.Provider value={{
            projects, getProjects, editProjects, deleteProjects, addProjects, getProjectsById, setSearchTerms, searchTerms
        }}>
            {props.children}
        </ProjectsContext.Provider>
    )
}