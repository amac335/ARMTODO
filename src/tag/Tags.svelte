<script>
let tagList = []
let startInput
let newTag = {
    slug: "",
    description: ""
}

const addTag = () => {
    newTag.slug = sanitizeSlug(newTag.slug)
    tagList = [...tagList, JSON.parse(JSON.stringify(newTag))]
    newTag.slug = ""
    newTag.description = ""
    startInput.focus()
}

const sanitizeSlug = (slugText) => {
    slugText = slugText.trim()
    slugText = slugText.split(' ').join('')
    return '#'+slugText
}

</script>


<div class="container">
    <form id="tagForm" on:submit|preventDefault={addTag} class="mb-5 mt-3">
        <legend>Enter a New Tag</legend>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <label for="title">Slug</label>
                    <input type="text" class="form-control" id="title" placeholder="Slug" bind:value={newTag.slug} bind:this={startInput}>
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <label for="description">Description</label>
                    <input type="text" class="form-control" id="description" placeholder="Small description" bind:value={newTag.description}>
                </div>  
            </div>
            <div class="col d-inline-flex">
                <input class="align-self-end btn btn-success mb-3" type="submit" value="Add">
            </div>
        </div>
    </form>

    <!-- List -->

    {#if tagList.length == 0 }
        <h3>There are no tags</h3>
    {:else}
        <ul class="list-group">

             {#each tagList as tag, i}

                <li class="list-group-item d-flex justify-content-between align-items-center">
                     <span class="badge badge-success badge-pill text-dark">{tag.slug}</span><span class="mr-4 text-info">{tag.description}</span> 
                    <span class="badge badge-primary badge-pill">{i}</span>
                </li>

             {/each}
        </ul>
    {/if}

</div>

<style>

/* input[type=submit]
{
    top: 0%; 
    left: 100%; 
    transform: translateX(-50%) translateY(-50%);
} 
*/
</style>