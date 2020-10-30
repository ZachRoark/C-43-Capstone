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

import { ProjectsProvider } from "./projects/ProjectsProvider"
import { ProjectsList } from "./projects/ProjectsList"
import { ProjectsForm } from "./projects/ProjectsForm"
import { ProjectsDetail } from "./projects/ProjectsDetail"

import { Home } from "./Home"
import { Archive } from "./Archive"



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

                <Route exact path="/archive">
                    <Archive />
                </Route>

            {/* Render the prep list when http://localhost:3000/prep */}
            <PrepProvider>
                {/* <Route exact path="/project">
                    <PrepList />
                </Route> */}

                <Route exact path="project/prep/create">
                    <PrepForm prep={currentPrep} setCurrentPrep={setCurrentPrep}/>
                </Route>

                <Route exact path="/prep/detail/:prepId(\d+)">
                    <PrepDetail prep={currentPrep} setCurrentPrep={setCurrentPrep}/>
                </Route>

                <Route exact path="/prep/edit/:prepId(\d+)">
                    <PrepForm prep={currentPrep} setCurrentPrep={setCurrentPrep}/>
                </Route>
            </PrepProvider>

            {/* Render the steps list when http://localhost:3000/steps */}
            <StepsProvider>
                {/* <Route exact path="/steps">
                    <StepsList />
                </Route> */}

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

                        {/* Render the steps list when http://localhost:3000/projects */}
            <ProjectsProvider>
                <Route exact path="/projects">
                    <ProjectsList />
                    <StepsList />
                    <PrepList />
                </Route>

                <Route exact path="/projects/create">
                    <ProjectsForm step={currentStep} setCurrentStep={setCurrentStep}/>
                </Route>

                <Route exact path="/projects/detail/:stepsId(\d+)">
                    <ProjectsDetail step={currentStep} setCurrentStep={setCurrentStep}/>
                </Route>

                <Route exact path="/projects/edit/:stepsId(\d+)">
                    <ProjectsForm step={currentStep} setCurrentStep={setCurrentStep}/>
                </Route>
            </ProjectsProvider>
            
        </>
    )
}

// MVP??:
    
// add steps and prep files together into the project files, 
// have them routed into the same place(/prep/create and 
// /steps/create etc.) somehow. 

// add a complete button to and project page.

// need a new project button on homepage

// when all steps are complete, a project complete and the public
// buttons appear

// home page needs to display current and past projects, 
// differentiated by the complete boolean

// use the same method for the archive as the home page 

//populate user page with username/personal website options

// log out feature

// basic styling




// STRETCH GOALS:

// create favorites box, have it populate on the left side of
// home page

// create followed users box, have it populate on the left side of
// home page

// create a follow users option from projects picked from the archive

// create a ratings system for projects




