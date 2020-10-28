import React, { useState } from "react"
import {Link} from "react-router-dom"
// import "./Steps.css"



export const PrepCard = ({ prepObj, index }) => (
    <section className="prepCard">
        <h3 className="prepName"></h3>
            <Link to={`/prep/detail/${prepObj.id}`}>{index +1}: 
            { prepObj.prepName }</Link>
    </section>
)
