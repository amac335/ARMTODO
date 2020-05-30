<script>
    import { fakeTaskList } from './store/store.js'
    import Nav from "./navigation/Nav.svelte"
    import { Router } from "@jamen/svelte-router";
    import DashboardSample from "./samples/DashboardSample.svelte"
    import Task from "./task/Task.svelte";
    import TaskForm from "./task/TaskForm.svelte";
    import TaskList from "./task/TaskList.svelte";
    import TagList from "./tag/Tags.svelte";

    const routes = {
        "/": DashboardSample,
        "/task": Task,
        "/task-list": TaskList,
        "/task-form": TaskForm,
        "/tags": TagList,
    }
    
</script>

<Nav>
    
    <Router {routes} />
      
</Nav>

<style>

</style>