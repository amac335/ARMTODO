<script>
    import { taskList } from './store/store.js'
    import Nav from "./navigation/Nav.svelte"
    import { Router } from "@jamen/svelte-router";
    import DashboardSample from "./samples/DashboardSample.svelte"
    import Task from "./task/Task.svelte";
    import TaskForm from "./task/TaskForm.svelte";
    import TaskList from "./task/TaskList.svelte";
    import TagList from "./tag/Tags.svelte";
    import ProjectList from "./project/Projects.svelte";
    import Lost from "./samples/Lost.svelte";

    const routes = {
        "/": DashboardSample,
        "/task": Task,
        "/task-list": TaskList,
        "#/task-list-item": TaskList, //this passes a query string
        "/task-form": TaskForm,
        "/tags": TagList,
        "/projects": ProjectList,
        404: Lost
    }
    
</script>

<Nav>
    
    <Router {routes} />
      
</Nav>

<style>

</style>