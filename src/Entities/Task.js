class Task {
    ID = "";
    name = "";
    description = "";
    dueDate = "";
    priority = "";
    projectID = "";

    /**
     * 
     * @param {string} ID the task's ID (unique identifier)
     * @param {string} name name of the task
     * @param {string} description task description
     * @param {string} dueDate due date
     * @param {string} priority the level of priority
     * @param {string} projectID the ID of the project to which the task belongs to
     */
    constructor(ID, name, description, dueDate, priority, projectID) {
        this.ID = ID;
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.projectID = projectID;
    }
}