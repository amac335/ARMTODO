<script>
import { currentScreen } from '../store/store.js'
import { onMount } from 'svelte'
onMount( () => {
    currentScreen.set('Projects')
  } )

let projectList = []
let startInput
let newProject = {
    title: "",
    description: ""
}

const addProject = () => {
    projectList = [...projectList, JSON.parse(JSON.stringify(newProject))]
    newProject.title = ""
    newProject.description = ""
    startInput.focus()
}

</script>


<div class="container">
    <form id="tagForm" on:submit|preventDefault={addProject} class="mb-3 mt-3 p-4 shadow-lg bg-secondary rounded">
        <legend>Enter a New Project</legend>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <label for="title">Project</label>
                    <input type="text" class="form-control" id="title" placeholder="Project" bind:value={newProject.title} bind:this={startInput}>
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea class="form-control" id="description" placeholder="Small description" bind:value={newProject.description}></textarea>
                </div>  
            </div>
            <div class="col d-inline-flex">
                <input class="align-self-end btn btn-success mb-3" type="submit" value="Add">
            </div>
        </div>
    </form>

    <!-- List -->

    {#if projectList.length == 0}
        <h3>There are no Projects</h3>
    {:else}
        <ul class="list-group">

             {#each projectList as project, i}

                <li class="list-group-item d-flex justify-content-between align-items-center mb-1 shadow">
                     <span class="badge badge-success badge-pill text-dark">{project.title}</span><span class="mr-4 text-info">{project.description}</span> 
                    <span class="badge badge-primary badge-pill">{i}</span>
                </li>

             {/each}
        </ul>
    {/if}

</div>

<style>

</style>