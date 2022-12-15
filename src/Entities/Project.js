import Task from "./Task";

class Project {
    ID = "";
    name = "";

    /**
     * Creates a new instance of Project
     * 
     * @param {string} ID The ID of the project
     * @param {string} name The name of the project
     * @param {Task[]} tasks The tasks of the project
     */
    constructor(ID, name, tasks = []) {
        this.ID = ID;
        this.name = name;
        this.tasks = tasks;
    }//======================================================================================================================

    /**
     * Adds a task to this project
     * 
     * @param {string} name Task's name
     * @param {string} description Task's description
     * @param {string} dueDate Due date
     * @param {string} priority The level of priority
     */
    addTask(name, description, dueDate, priority) {
        let counter = 0;
        if (this.tasks.length != 0) {
            const lastTaskID = this.tasks[this.tasks.length - 1].ID;
            const lastCount = lastTaskID.substring(lastTaskID.lastIndexOf("-") + 1);
            counter = parseInt(lastCount);
        }

        const taskID = `${ID}_task-${counter + 1}`;
        const task = new Task(taskID, name, description, dueDate, priority, ID);
        this.tasks.push(task);

    }//=======================================================================================================================

    /**
     * Updates a task.
     * @param {Task} task 
     */
    updateTask(task) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (task.ID == this.tasks[i].ID) {
                this.tasks[i].name = task.name;
                this.tasks[i].description = task.description;
                this.tasks[i].dueDate = task.dueDate;
                this.tasks[i].priority = task.priority;
                break;
            }
        }
    }//=========================================================================================================================

    /**
     * Deletes a task.
     * @param {string} taskID 
     */
    removeTask(taskID) {
        const filter = this.tasks.filter(task => taskID != task.ID);
        this.tasks = filter;
    }
    //=========================================================================================================================
}

export default Project;