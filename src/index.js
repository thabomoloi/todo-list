import ProjectController from "./AppLogic/ProjectController"
import ProjectForm from "./View/ProjectForm";
import SidebarView from "./View/SidebarView";
import Header from "./View/Header";
import ProjectView from "./View/ProjectView";
import TaskForm from "./View/TaskForm";

const controller = new ProjectController();

const taskForm = new TaskForm(controller);
const projectForm = new ProjectForm(controller);

new SidebarView(projectForm, taskForm, controller);
new Header();
new ProjectView(taskForm, controller, "project-1");