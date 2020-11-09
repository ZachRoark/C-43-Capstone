import React, {useState} from "react";
import { Route } from "react-router-dom";

import { StepsProvider } from "./steps/StepsProvider"
import { StepsList } from "./steps/StepsList"
import { StepsForm } from "./steps/StepsForm"
import { StepsDetail } from "./steps/StepsDetail"

import { PrepProvider } from "./prep/PrepProvider"
import { PrepList } from "./prep/PrepList"
import { PrepForm } from "./prep/PrepForm"
import { PrepDetail } from "./prep/PrepDetail"

import { ProjectsProvider } from "./projects/ProjectsProvider"
import { ProjectsList } from "./projects/ProjectsList"
import { ProjectsForm } from "./projects/ProjectsForm"
import { ProjectsDetail } from "./projects/ProjectsDetail"

// import { ArchiveProvider } from "./archive/ArchiveProvider"
import { ArchiveList } from "./archive/ArchiveList"
// import { PastProjectsList } from "./homeLists/PastProjectsList"
// import { CurrentProjectsList } from "./homeLists/CurrentProjectsList"
import { Home } from "./Home"


export const ApplicationViews = () => {
    const emptyStep = { stepName: "", id: 0, summary: "", estimateTime: null, referenceImg: ""}
    const emptyPrep = { prepName: "", id: 0 }
    const emptyProject = { projectName: "", id: 0, summary: "", estimateTime: null  }
    
    const [currentStep, setCurrentStep] = useState(emptyStep)
    const [currentPrep, setCurrentPrep] = useState(emptyPrep)
    const [currentProject, setCurrentProject] = useState(emptyProject)


    return (
        <>

{/* Render the location list when http://localhost:3000/archive */}
            <ProjectsProvider>    
                <Route exact path="/archive">
                <ArchiveList projects={currentProject} setCurrentProject={setCurrentProject}/>
                </Route>
            </ProjectsProvider>

{/* Render the Projects list when http://localhost:3000/projects */}
    <ProjectsProvider>
        <StepsProvider>
            <PrepProvider>
                <Route exact path="/projects">
                    <Home projects={currentProject} setCurrentProject={setCurrentProject}/>
                    {/* <PastProjectsList projects={currentProject} setCurrentProject={setCurrentProject}/> */}
                    {/* <CurrentProjectList projects={currentProject} setCurrentProject={setCurrentProject}/> */}
                </Route>
            </PrepProvider>
        </StepsProvider>
    </ProjectsProvider>

    <ProjectsProvider>
        <StepsProvider>
            <PrepProvider>
                <Route exact path="/projects/create">
                    <ProjectsForm project={currentProject} setCurrentProject={setCurrentProject}/>
                </Route>
            </PrepProvider>
        </StepsProvider>
    </ProjectsProvider>

    <ProjectsProvider>
        <StepsProvider>
            <PrepProvider>
                <Route exact path="/projects/detail/:projectsId(\d+)">
                    <ProjectsDetail project={currentProject} setCurrentProject={setCurrentProject}/>
                    <PrepList projects={currentProject} />
                    <StepsList projects={currentProject} />
                </Route>
            </PrepProvider>
        </StepsProvider>
    </ProjectsProvider>

    <ProjectsProvider>
        <StepsProvider>
            <PrepProvider>
                <Route exact path="/projects/edit/:projectsId(\d+)">
                    <ProjectsForm project={currentProject} setCurrentProject={setCurrentProject}/>
                </Route>
            </PrepProvider>
        </StepsProvider>
    </ProjectsProvider>

{/* Render the prep list when http://localhost:3000/prep */}

        <ProjectsProvider>
            <PrepProvider>
                <Route exact path="/prep/create">
                    <PrepForm prep={currentPrep} setCurrentPrep={setCurrentPrep} projects={currentProject} setCurrentProject={setCurrentProject}/>
                </Route>

                <Route exact path="/prep/detail/:prepId(\d+)">
                    <PrepDetail prep={currentPrep} setCurrentPrep={setCurrentPrep} projects={currentProject} setCurrentProject={setCurrentProject}/>
                </Route>

                <Route exact path="/prep/edit/:prepId(\d+)">
                    <PrepForm prep={currentPrep} setCurrentPrep={setCurrentPrep} projects={currentProject} setCurrentProject={setCurrentProject}/>
                </Route>
            </PrepProvider>
        </ProjectsProvider>

{/* Render the steps list when http://localhost:3000/steps */}
            <StepsProvider>

                <Route exact path="/steps/create">
                    <StepsForm step={currentStep} setCurrentStep={setCurrentStep} projects={currentProject} setCurrentProject={setCurrentProject}/>
                </Route>

                <Route exact path="/steps/detail/:stepsId(\d+)">
                    <StepsDetail step={currentStep} setCurrentStep={setCurrentStep} projects={currentProject} setCurrentProject={setCurrentProject}/>
                </Route>

                <Route exact path="/steps/edit/:stepsId(\d+)">
                    <StepsForm step={currentStep} setCurrentStep={setCurrentStep} projects={currentProject} setCurrentProject={setCurrentProject}/>
                </Route>
            </StepsProvider>
            
        </>
    )
}




// home page needs to display current and past projects, 
// differentiated by the complete boolean

// use the same method for the archive as the home page 

//populate user page with username/personal website options

// log out feature



// TODO TOMORROW:

// basic styling







// STRETCH GOALS:

// create favorites box, have it populate on the left side of
// home page

// create followed users box, have it populate on the left side of
// home page

// create a follow users option from projects picked from the archive

// create a ratings system for projects




