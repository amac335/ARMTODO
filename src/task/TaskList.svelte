<script>

import { fakeTaskList } from '../store/store.js'

</script>

<div class="container-fluid">

    <h1>Tasks</h1>
    <ul class="list-group mb-5">

        {#each $fakeTaskList as task, i}
        <li href="#" class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1">{task.title}</h4>
                <!-- <small>Due {task.dueDate}</small> -->
                <span class="badge badge-primary">Due {task.dueDate}</span>
            </div>
            <p class="mt-2 mb-1">{task.memo.substring(0,150)} {#if task.memo.length > 150} ...MORE >>{/if}</p>
            <small>Sub-tasks: {task.subTasks.length} || Client: Client: {task.client} || Project: {task.project}</small> <br>
            <small>[{task.id}-{i}]</small> 
        </li>  
        {/each}
   
    </ul>
</div>


<style>

</style>