<script>
    import { fakeTaskList } from './store/store.js'
    import Nav from "./navigation/Nav.svelte"
    import { Router } from "@jamen/svelte-router";
    import DashboardSample from "./samples/DashboardSample.svelte"
    import Task from "./task/Task.svelte";

    const routes = {
        "/": DashboardSample,
        "/task": Task
    }
    
</script>

<Nav>
    
    <Router {routes} />
      
</Nav>

<style>

</style>