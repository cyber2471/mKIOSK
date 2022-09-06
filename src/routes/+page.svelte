<script>
	let foo = 'baz'
	let bar = 'qux'
	let result = null
	
	async function doPost () {
		const res = await fetch('https://httpbin.org/post', {
			method: 'POST',
			body: JSON.stringify({
				foo,
				bar
			})
		})
		
		const json = await res.json()
		result = JSON.stringify(json)
	}

    export function GET(event) {
  // log all headers
  console.log(...event.request.headers);
 
  return json({
    // retrieve a specific header
    userAgent: event.request.headers.get('user-agent')
  });
}

//import Icon from "$lib/assets/icon.png"

import ListView from "./common/ListView.svelte";

</script>

<main>
<input bind:value={foo} />
<input bind:value={bar} />
<button type="button" on:click={doPost}>
	Post it.
</button>
<p>
	Result:
</p>
<pre>
{result}
</pre>

</main>

<ListView></ListView>
<ListView></ListView>
<ListView></ListView>

<style>
	img { width:200px; height:250px} 
</style>