function Project(projectName, todos = []) {
    const name = projectName;
    const tasks = todos;
    return { name, tasks };
}
export default Project;