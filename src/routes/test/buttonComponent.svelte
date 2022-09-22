<script>
    import { getContext } from 'svelte'
    // export let count
    
    let aType = getContext('incrementCount')
    let bType = getContext('changeNum')

    let count = getContext('count')

    </script>
    
    <input type=button on:click={aType} bind:value={count}>
      increment count [{count}]
