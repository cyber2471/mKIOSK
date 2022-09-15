<script>

export let result = '';
export let width = '100px';
export let height = '150px';
export let title = null; 


let stylesheet = `width:${width}px; height:${height}px`

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

<!-- <input on:click={loadView} type=button value=click>
<p>{result}</p> -->

<span class="container">
	<img class="box" style="--width:{width};--height:{height}" src={Coffee} alt="download icon"/>
</span>
<!-- <img class="box"  src={Coffee} /> -->
<!-- <img class="box" style="width:var(--width);height:var(--height)" src={Coffee} alt="download icon"/> -->
<style>
.container {
	border-top:1px;
	background-color: gray;
}
.box {
		width: var(--width);
		height: var(--height);
	}
	/* img { width:var(--width); height: var(--height); } */
</style>