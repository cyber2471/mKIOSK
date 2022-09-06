<script>

export let result = '';
export let width = null;
export let height = null;

let foo = 'baz'
let bar = 'qux'


async function loadView() {

    //let loc = "https://www.astems.co.kr/view.php";
    let loc = "https://httpbin.org/post";

    const res = await fetch(loc, {
			method: 'POST',
			body: JSON.stringify({
				foo,
				bar
			})
		})
		
		const json = await res.json()
		result = JSON.stringify(json)

        console.log(result);

}

import Coffee from "$lib/assets/coffee001.png"


</script>

<input on:click={loadView} type=button value=click>
<p>{result}</p>

<img src={Coffee} alt="download icon"/>

<style>
	img { width:150px; height:200px} 
</style>