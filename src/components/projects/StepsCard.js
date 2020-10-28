import React, { useState } from "react"
import {Link} from "react-router-dom"
// import "./Steps.css"



export const StepsCard = ({ steps, index }) => (
    <section className="stepsCard">
        <h3 className="stepName"></h3>
            <Link to={`/steps/detail/${steps.id}`}>
                Step {index +1}:_{ steps.stepName }
            </Link>
       
        <div className="stepsSummary">Summary :{ steps.summary }</div>
        <div className="estimateTime">How long does it take? { steps.estimateTime } hour(s)</div>
        {/* <div className="stepsImg">{ steps.referenceImg }</div> */}
    </section>
)