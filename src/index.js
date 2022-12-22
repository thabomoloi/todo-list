import ProjectController from "./AppLogic/ProjectController"
import ProjectForm from "./View/ProjectForm";
import SidebarView from "./View/SidebarView";
import Header from "./View/Header";
import ProjectView from "./View/ProjectView";
import TaskForm from "./View/TaskForm";

const controller = new ProjectController();
const projectForm = new ProjectForm(controller);
new SidebarView(projectForm, controller);

new Header();
const taskForm = new TaskForm(controller);
new ProjectView(taskForm, controller, "project-1");