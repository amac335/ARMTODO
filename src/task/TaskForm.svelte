<script>
import { onMount } from 'svelte'
import { currentScreen } from '../store/store'
onMount( () => {
    currentScreen.set('Task Form')
  } )



</script>

<form id="task-form">
  <fieldset>
    <legend>Enter a New Task</legend>
    <div class="row">
      <div class="col-8">
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title" placeholder="Give your task a title...">
        </div>
      </div>
      <div class="col-4">
        <div class="form-group">
          <label for="priority">Priority</label>
          <input type="range" min="1" max="5" step="1" value="3" class="custom-range" id="priority">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label for="dueDate">Due Date</label>
          <input type="date" class="form-control" id="dueDate">
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="completeDate">Complete Date</label>
          <input type="date" class="form-control" id="completeDate">
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="startDate">Start Date</label>
          <input type="date" class="form-control" id="startDate">
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="repeating">
            <label class="custom-control-label" for="repeating">Repeating</label>
          </div>
        </div>
        <div class="form-group">
          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="billable">
            <label class="custom-control-label" for="billable">Billable</label>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label for="project">Project</label>
          <select multiple="" class="form-control" id="project">
            <option>To Do App</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="client">Client</label>
          <select multiple="" class="form-control" id="client">
            <option>Personal</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
    </div>

    <div class="form-group">
      <label for="memo">Memo</label>
      <textarea class="form-control" id="memo" rows="15"></textarea>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label for="project">Sub-tasks</label>
          <select multiple="" class="form-control" id="project">
            <option>To Do App</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="tags">Tags</label>
          <select multiple="" class="form-control" id="tags">
            <option>Personal</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="relatedNotes">Notes</label>
          <select multiple="" class="form-control" id="relatedNotes">
            <option>Personal</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="relatedTasks">Related Tasks</label>
          <select multiple="" class="form-control" id="relatedTasks">
            <option>Personal</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Add</button>
  </fieldset>
</form>

<style>
  #task-form {
    max-width: 900px;
    margin: auto;
    padding: 10px;
  }
</style>