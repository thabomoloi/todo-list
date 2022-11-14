import Inbox from "../entities/inbox";
import Project from "../entities/project";
import Todo from "../entities/ToDo";
import TodoList from "../entities/todoList";

const TodoStorage = (() => {
    const todo = localStorage.getItem("todoList");
    var inbox;
    var projects;
    if (todo != null) {
        const todoList = JSON.parse(todo);
        inbox = todoList.inbox;
        projects = todoList.projects;
    }
    else {
        inbox = Inbox();
        projects = [];
    }

    const getProjects = () => projects;
    const getInbox = () => inbox;

    const save = (todoList) => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }
    return { getInbox, getProjects, save };
})();

export default TodoStorage;