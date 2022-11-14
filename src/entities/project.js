function Project(taskName, todos = []) {
    const name = taskName;
    const tasks = todos;
    return { name, tasks };
}