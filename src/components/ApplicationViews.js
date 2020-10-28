import React, {useState} from "react";
import { Route } from "react-router-dom";
import { StepsProvider } from "./projects/StepsProvider"
import { StepsList } from "./projects/StepsList"
import { StepsForm } from "./projects/StepsForm"
import { StepsDetail } from "./projects/StepsDetail"
import { Home } from "./Home"



export const ApplicationViews = () => {
    const emptyStep = { stepName: "", id: 0, summary: "", estimateTime: null, referenceImg: ""}
    const [currentStep, setCurrentStep] = useState(emptyStep)
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <Home />
                </Route>

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