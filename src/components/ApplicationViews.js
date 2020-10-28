import React, {useState} from "react";
import { Route } from "react-router-dom";

import { StepsProvider } from "./projects/StepsProvider"
import { StepsList } from "./projects/StepsList"
import { StepsForm } from "./projects/StepsForm"
import { StepsDetail } from "./projects/StepsDetail"

import { PrepProvider } from "./projects/PrepProvider"
import { PrepList } from "./projects/PrepList"
import { PrepForm } from "./projects/PrepForm"
import { PrepDetail } from "./projects/PrepDetail"

import { Home } from "./Home"



export const ApplicationViews = () => {
    const emptyStep = { stepName: "", id: 0, summary: "", estimateTime: null, referenceImg: ""}
    const emptyPrep = { prepName: "", id: 0 }
    const [currentStep, setCurrentStep] = useState(emptyStep)
    const [currentPrep, setCurrentPrep] = useState(emptyPrep)
    
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <Home />
                </Route>

            {/* Render the prep list when http://localhost:3000/prep */}
            <PrepProvider>
                <Route exact path="/prep">
                    <PrepList />
                </Route>

                <Route exact path="/prep/create">
                    <PrepForm prep={currentPrep} setCurrentPrep={setCurrentPrep}/>
                </Route>

                <Route exact path="/prep/detail/:prepId(\d+)">
                    <PrepDetail prep={currentPrep} setCurrentPrepp={setCurrentPrep}/>
                </Route>

                <Route exact path="/prep/edit/:prepId(\d+)">
                    <PrepForm prep={currentPrep} setCurrentPrep={setCurrentPrep}/>
                </Route>
            </PrepProvider>

            {/* Render the steps list when http://localhost:3000/steps */}
            <StepsProvider>
                <Route exact path="/steps">
                    <StepsList />
                </Route>

                <Route exact path="/steps/create">
                    <StepsForm step={currentStep} setCurrentStep={setCurrentStep}/>
                </Route>

                <Route exact path="/steps/detail/:stepsId(\d+)">
                    <StepsDetail step={currentStep} setCurrentStep={setCurrentStep}/>
                </Route>

                <Route exact path="/steps/edit/:stepsId(\d+)">
                    <StepsForm step={currentStep} setCurrentStep={setCurrentStep}/>
                </Route>
            </StepsProvider>
        </>
    )
}