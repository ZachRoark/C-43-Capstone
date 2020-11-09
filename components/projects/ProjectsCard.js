
import React, { useState, useContext } from "react"
import {Link} from "react-router-dom"


export const ProjectsCard = ({ projects }) => {

    return (
    <section className="projectsCard">
        <Link className="projectsCardText" to={`/projects/detail/${projects.id}`}>{ projects.projectName }
        </Link>

    </section>
)}

