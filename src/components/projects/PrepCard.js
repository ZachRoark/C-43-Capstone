import React from "react"
import {Link} from "react-router-dom"
// import "./Steps.css"



export const PrepCard = ({ prep, index }) => (
    <section className="prepCard">
        <h3 className="prepName">prep</h3>
            <Link to={`/prep/detail/${prep.id}`}>{index +1}:_ 
            { prep.prepName }</Link>
    </section>
)
