

















// past and current project lists passed into /projects (individually) under home,
// sorted by public(from archive) && user id===currentuser(from projects)






// SAMPLE CODE FROM EXAMPLES:

// export const ArchiveList = () => {
//     // This state changes when `getProjects()` is invoked below
//     const { projects, getProjects} = useContext(ProjectsContext)
//     const [filteredProjects, setFilteredProjects] = useState([])
//     const history = useHistory()
    

//     useEffect(() => {
//         getProjects()
//     }, [])

    // useEffect(() => {
    //     const user = parseInt(localStorage.getItem("craftit_user"))
    //     const usersSteps = steps.filter(step => step.userId === user)/*this variable (userSteps) filters the steps by user*/
    //     setFilteredSteps(usersSteps)
    // }, [steps, setFilteredSteps])

    // useEffect(() => {
    //     if(!projects) return
    //     const archivedProjects = projects.filter(projects => projects.public === true)/*this variable (projectSteps) filters the steps by project Id */
    //     setFilteredProjects(archivedProjects)
    // }, [projects, setFilteredProjects])


// export const ProjectsList = () => {
//     // This state changes when `getProjects()` is invoked below
//     const { projects, getProjects} = useContext(ProjectsContext)
//     const [filteredProjects, setFilteredProjects] = useState([])
    
//     const history = useHistory()
    


    
//     useEffect(() => {
//         getProjects()
//     }, [])

//     useEffect(() => {
//         const user = parseInt(localStorage.getItem("craftit_user"))
//         const usersProjects = projects.filter(project => project.userId === user)

//         setFilteredProjects(usersProjects)
//     }, [projects, setFilteredProjects])






