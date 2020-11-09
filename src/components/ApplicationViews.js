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
import { PastProjectsList } from "./projects/PastProjectsList"
import { ProjectsForm } from "./projects/ProjectsForm"
import { ProjectsDetail } from "./projects/ProjectsDetail"

import { ArchiveList } from "./archive/ArchiveList"
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

            <ProjectsProvider>    
                <Route exact path="/archive">
                <ArchiveList projects={currentProject} setCurrentProject={setCurrentProject}/>
                </Route>
            </ProjectsProvider>

    <ProjectsProvider>
        <StepsProvider>
            <PrepProvider>
                <Route exact path="/projects">
                    <Home projects={currentProject} setCurrentProject={setCurrentProject}/>
                    <ProjectsList/>
                    <PastProjectsList projects={currentProject} setCurrentProject={setCurrentProject}/>
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
