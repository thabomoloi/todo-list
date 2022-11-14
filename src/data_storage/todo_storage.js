import Inbox from "../entities/inbox";
import Project from "../entities/project";
import Todo from "../entities/ToDo";
import TodoList from "../entities/todoList";

const TodoStorage = (() => {
    var todo = localStorage.getItem("todoList");
    var inbox = Inbox();
    var projects = [];
    if (todo != null) {
        const todoList = JSON.parse(todo);
        inbox = todoList.inbox;
        projects = todoList.projects;
    }

    const getProjects = () => projects;
    const getInbox = () => inbox;

    const save = (todoList) => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
        inbox = todoList.inbox;
        projects = todoList.projects;
    }
    return { getInbox, getProjects, save };
})();

export default TodoStorage;