<script>
  /** @type {import('./$types').PageData} */
  import { page } from '$app/stores';
  export let data;

  
  console.log(page)

</script>


<h1>{data.title}</h1>
<div>{@html data.content}</div>

{#each data.sections as section}
<h1>{section.slug}</h1>
<div>{section.title}</div>
{/each}