import React from "react"
import {Link} from "react-router-dom"


export const PrepCard = ({ prep, index }) => {
    return (
    <section className="prepCard">
        <Link to={`/prep/detail/${prep.id}`}>{index +1}:_{ prep.prepName }
        </Link>

    </section>
)}