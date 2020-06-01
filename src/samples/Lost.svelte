<script>
import { router } from "@jamen/svelte-router"
// let location = window.location
console.log(location)
console.log($router)

let q = JSON.stringify($router.query)
let p = $router.path
</script>

<div class="container">
    <h1>Cannot find:</h1>
    <p>Path: {p}</p>
    <p>Search criteria: {q}</p>
</div>