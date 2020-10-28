import React, { useState } from "react"
import {Link} from "react-router-dom"
// import "./Steps.css"



export const StepsCard = ({ prep, index }) => (
    <section className="prepcard">
        <h3 className="stepName"></h3>
            <Link to={`/prepbox/detail/${prep.id}`}>
                Prep {index +1} :_{ prep.stepName }
            </Link>

        <div className="stepsSummary">Summary :{ prep.summary }</div>

    </section>
)
