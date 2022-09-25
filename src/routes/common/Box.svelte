<script>

export let result = '';
export let width = '100px';
export let height = '150px';
export let title = null; 


let stylesheet = `width:${width}px; height:${height}px`

// async function loadView() {
//     //let loc = "https://www.astems.co.kr/view.php";
//     let loc = "https://httpbin.org/post";

//     const res = await fetch(loc, {
// 			method: 'POST',
// 			body: JSON.stringify({
// 				foo,
// 				bar
// 			})
// 		})
		
// 		const json = await res.json()
// 		result = JSON.stringify(json)

//         console.log(result);

// }



// var nData = AddComma(nData);

import Coffee from "$lib/assets/coffee001.png"


</script>

<!-- <input on:click={loadView} type=button value=click>
<p>{result}</p> -->

<!-- <span class="container">
	<img class="box" style="--width:{width};--height:{height}" src={Coffee} alt="download icon"/>
</span> -->

<div class="box">
	<slot></slot>
	<!-- <img class="box" style="--width:{width};--height:{height}" src={Coffee} alt="download icon"/> -->
</div>
<!-- <img class="box"  src={Coffee} /> -->
<!-- <img class="box" style="width:var(--width);height:var(--height)" src={Coffee} alt="download icon"/> -->
<style>
.container {
	/* border-top:1px solid rgba(81, 13, 240, 0.1); */
	/* background-color: gray; */
} 
.box {
		/* width: var(--width); */
		display: grid;
		grid-template-rows: repeat(3, 1fr); 
		width: 85px;
		height: 120px;
		/* border: 1.5px solid #aaa; */
		border-radius: 2px;
		box-shadow: 3px 3px 2px rgba(0,0,0,0.1);
		transition-duration: 0.1s;
		/* padding: 1em;  */
		margin: 0 0 2px 0;
		/* font-family: Arial, Helvetica, sans-serif; */
		/* font-family:'Roboto', sans-serif; */
		font-family: 'Nanum Myeongjo', serif; 
		font-weight: 600;
		font-size: 14px;
		border-radius: 10px 10px;
		background: transparent;
		cursor: pointer;
		/* border: 1px solid purple; */
		/* align-self: stretch; */
	}
 .box:active {
	margin-left:3px;
	/* margin-top: 3px; */
	box-shadow: none;
	position: relative;
	background-color: rgb(250, 244, 250);
 }
	/* img { width:var(--width); height: var(--height); } */
</style>