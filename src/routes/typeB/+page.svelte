<script>
	let foo = 'baz'
	let bar = 'qux'
	let result = ''
	let title = ''
	let content = ''
	
	let goods = [
		{ name:'아메리카노',   price:3500, img:'' },
		{ name:'카페라떼',     price:4000, img:'' },
		{ name:'카푸치노',     price:4000, img:'' },
		{ name:'망고에이드',   price:4500, img:'' },
		{ name:'오렌지에이드', price:4500, img:'' },
		{ name:'딸기쉐이크',   price:4500, img:'' },
		{ name:'나쁜쉐이크',   price:9500, img:'' },
		{ name:'좋은쉐이크',   price:1500, img:'' },
		{ name:'미친쉐이크',   price:500,  img:'' },	
		{ name:'졸라쉐이크',   price:500,  img:'' },
	];

	// console.log(content)

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
    userAgent: event.request.headers.get('user-agent')
  });
}

function AddComma(num)             
{                
	var regexp = /\B(?=(\d{3})+(?!\d))/g;                
	return num.toString().replace(regexp, ',');            
} 
//import Icon from "$lib/assets/icon.png"

import Box from "../common/ListView.svelte";
import Coffee from "$lib/assets/coffee001.png"

</script>

<main>


</main>

<!-- <ListView --width="100px" --height="150px"></ListView> -->
  <div class="container">
	{#each goods as {name, price, img}, idx}
		<Box>
			<center>
				<img width=100px height=150px src={Coffee} alt="download icon"/>
				<span class="name">{name}</span><br>	
				<span class="price">￦{AddComma(price)}</span>
			</center>
		</Box>	
	{/each}
  </div>


<style>
	.container {
		padding-top: 20px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		row-gap: 10px;
		/* align-self:flex-end; */
		/* border: 1px solid red; */
	}
	.box { 
			/* width: var(--width); */
			width: 130px;
			border: 1.5px solid #aaa;
			border-radius: 2px;
			box-shadow: 3px 3px 2px rgba(0,0,0,0.1);
			
			padding: 1em;  
			margin: 0 0 1em 0;
			font-family: Arial, Helvetica, sans-serif;
			font-size: 14px;
		}
	  .name {
			font-size: 13px;
	  }
	  .price {
		font-size: 15px;
	  }
		/* img { width:var(--width); height: var(--height); } */
	</style>