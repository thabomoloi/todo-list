import TodoStorage from "./TodoStorage";
import Project from "../entities/project";
import Todo from "../entities/ToDo";

class ProjectStorage {
    constructor() {
        this.todoStorage = new TodoStorage();
        this.projects = this.todoStorage.getProjects();
    }
    getProject(id) {
        for (let i = 0; i < this.projects.length; i++) {
            if (this.projects[i].id == id) {
                return this.projects[i];
            }
        }
    }
    getAllProjects() {
        return this.projects;
    }
    addProject(name) {
        const id = `project-${this.projects.length}`;
        this.projects.push(Project(id, name));
        this.todoStorage.setProjects(this.projects);
    }
    updateProject(id, name, tasks) {
        for (let i = 0; i < this.projects.length; i++) {
            if (this.projects[i].id == id) {
                this.projects[i].name = name;
                this.projects[i].tasks = tasks;
            }
        }
        this.todoStorage.setProjects(this.projects);
    }
    removeProject(id) {
        const projs = this.projects.filter(item => item.id != id);
        this.projects = projs;
        this.todoStorage.setProjects(this.projects);
    }
    getAllProjectTasks(id) {
        for (let i = 0; i < this.projects.length; i++) {
            if (this.projects[i].id == id) {
                return this.projects[i].tasks;
            }
        }
        return [];
    }
    addProjectTask(projectID, title, description, dueDate, priority, done) {
        for (let i = 0; i < this.projects.length; i++) {
            if (this.projects[i].id == projectID) {
                const taskID = `${this.projects[i].id}-${this.projects[i].tasks.length}`;
                this.projects[i].tasks.push(Todo(taskID, title, description, dueDate, priority, done));
            }
        }
        this.todoStorage.setProjects(this.projects);
    }
    updateProjectTask(projectID, taskID, title, description, dueDate, priority, done) {
        for (let i = 0; i < this.projects.length; i++) {
            if (this.projects[i].id == projectID) {
                for (let j = 0; j < this.projects.tasks.length; j++) {
                    if (this.projects[i].tasks[j].id == taskID) {
                        this.projects[i].tasks[j] = Todo(taskID, title, description, dueDate, priority, done);
                    }
                }
            }
        }
        this.todoStorage.setProjects(this.projects);
    }
    removeProjectTask(projectID, taskID) {
        for (let i = 0; i < this.projects.length; i++) {
            if (this.projects[i].id == projectID) {
                const tasks = this.projects[i].tasks.filter(item => item.id != taskID);
                this.projects[i].tasks = tasks;
            }
        }
        this.todoStorage.setProjects(this.projects);
    }
}

export default ProjectStorage;
