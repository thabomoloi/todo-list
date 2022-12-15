import Project from "../Entities/Project";
import Task from "../Entities/Task";

class DA {
    constructor() {
        this.todoList = localStorage.getItem("TODO");

        const objects = [];
        if (this.todoList)
            objects = JSON.parse(this.todoList);

        this.projects = [new Project()];
        this.projects.pop();

        objects.forEach(project => {
            const tasks = [];
            project.tasks.forEach(task => {
                tasks.push(new Task(task.ID, task.name, task.description, task.dueDate, task.priority, task.projectID))
            });
            this.projects.push(new Project(project.ID, project.name, project.tasks));
        });
    }

    allProjects() {
        return this.projects;
    }

    /**
     * 
     * @param {Project} project 
     */
    addProject(project) {
        this.projects.push(project);
        this.commit();
    }
    /**
     * 
     * @param {Project} project 
     */
    updateProject(project) {
        for (let i = 0; i < this.projects.length; i++) {
            if (project.ID == this.projects[i].ID) {
                this.projects[i].name = project.name;
                this.projects[i].tasks = project.tasks;
                break;
            }
        }
        this.commit();
    }

    /**
     * 
     * @param {string} ID 
     */
    removeProject(ID) {
        const filter = this.projects.filter(project => ID != project.ID);
        this.projects = filter;
        this.commit();
    }

    commit() {
        localStorage.setItem("TOD", JSON.stringify(this.projects));
    }
}

export default DA;