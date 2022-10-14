
<script>
// import { setContext, getContext } from 'svelte'
import { db } from "../common/DataStore"

	let foo = 'baz'
	let bar = 'qux'
	let result = ''
	let title = ''
	let content = ''
	let status = ''
	
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

/* 	async function doPost () {
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

  return json({
    // retrieve a specific header
    userAgent: event.request.headers.get('user-agent')
  });
} */

function AddComma(num)             
{                
	var regexp = /\B(?=(\d{3})+(?!\d))/g;                
	return num.toString().replace(regexp, ',');            
} 
//import Icon from "$lib/assets/icon.png"

async function fvSelected(name, qty, price) {


  try {

    const id = await db.orderList.add({
		gName:name, 
		gQty:qty,
		gAttr: {shot:'0', size:{tall:'0', grande:'0', vanti:'0'}, decaf:{decaf:'0', half_decaf:'0'}, 
		        cup:{single_use:'0', mug_cup:'0', personal_cup:'0'}, syrup:{vanila:'0', hazelnut:'0', caramel:'0'},
                whipping: {nomal_whipping:{less:0, medium:0, more:0 }, espreso_whipping:{less:0, medium:0, more:0 }},
				drizzle: {caramel:{less:0, medium:0, more:0 }, chocolate: {less:0, medium:0, more:0 }}
			   }, 
		gPrice:price, 
		ctime:'20220921121212', 
		utime:'20220921121212', 
		userid:'cyberpark', 
		remark:''
    });

    status = `gMeatadata successfully added. Got id ${id}`;
    

  } catch (error) {
    status = `Failed to add ${gName}: ${error}`;
  }

}


import Box from "../common/ListView.svelte";
import Coffee from "$lib/assets/coffee001.png"

</script>

  <div class="container">
	<div class="itemList">
	{#each goods as {name, price, img}, idx}
		<Box>
			<center on:click={() => fvSelected( name, 1, price)}>
				<img  width=100px height=150px src={Coffee} alt="download icon"/>
				<span class="name">{name}</span><br>	
				<span class="price">￦{AddComma(price)}</span>
			</center>
		</Box>	
	{/each}
	</div>
  </div>


<style>
	.container {
		padding-top: 20px;
		display: grid;
		/* grid-template-columns: repeat(3, 1fr); */
		/* grid-template-columns: 2fr 1fr;  */
		column-gap: 10px;
		/* align-self:flex-end; */
		/* border: 1px solid red; */
	}

	.itemList {
		/* padding-top: 20px; */
		display: grid;
		margin: auto;
		text-align: center;
		justify-content: center;
		grid-template-columns: repeat(3, 1fr); 
		/* grid-template-columns: 2fr 1fr;  */
		column-gap: 40px;
		/* align-self:flex-end; */
		/* border: 1px solid blue; */
	}

	.name {
		font-size: 13px;
    }
    .price {
 		font-size: 15px;
	 }
		/* img { width:var(--width); height: var(--height); } */
	</style>