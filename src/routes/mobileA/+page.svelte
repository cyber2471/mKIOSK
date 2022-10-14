<script>
	import { db } from "../common/DataStore"
	import Box from "../common/Box.svelte";
	import Coffee from "$lib/assets/coffee001.png"

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

function AddComma(num)             
{                
	var regexp = /\B(?=(\d{3})+(?!\d))/g;                
	return num.toString().replace(regexp, ',');            
} 
//import Icon from "$lib/assets/icon.png"

async function fvSelected(name, qty, price) {

//   alert('11')
  try {

    // Add the new friend!
    const id = await db.orderList.add({
		gName:name, 
		gQty:qty,
		gAttr: {shot:'0', size:{tall:'0', grande:'0', vanti:'0'}, decaf:{decaf:'0', half_decaf:'0'}, 
		        cup:{single_use:'0', mug_cup:'0', personal_cup:'0'}, syrup:{vanila:'0', hazelnut:'0', caramel:'0'},
                whipping: {nomal_whipping:{less:0, medium:0, more:0 }, espreso_whipping:{less:0, medium:0, more:0 }},
				drizzle: {caramel:{less:0, medium:0, more:0 }, chocolate: {less:0, medium:0, more:0 }}
			   }, 
		gPrice:price, 
		uPrice:price,
		ctime:'20220921121212', 
		utime:'20220921121212', 
		userid:'cyberpark', 
		remark:''
    });

    status = `gMeatadata successfully added. Got id ${id}`;
    
    // Reset form:

  } catch (error) {
    status = `Failed to add ${gName}: ${error}`;
  }

//   console.log(id)
}	
 </script>

<div class="container">
	<div class="itemList">
	{#each goods as {name, price, img}, idx}
		<Box>
			<center >
				<div on:click={() => fvSelected( name, 1, price)}>
					<img  width=65px height=85px src={Coffee} alt="download icon"/>
				</div>
				<div class="name">{name}</div>
				<div class="price">￦{AddComma(price)}</div>
			</center>
		</Box>	
	{/each} 
	</div>
  </div>

  <style>
	.container {
		padding-top: 10px;
		display: grid;
		width: 100%;
		margin: auto;
		/* grid-template-columns: repeat(1, 1fr); */
		/* grid-template-columns: 2fr 1fr;  */
		/* column-gap: 10px; */
		/* align-self:flex-end; */
		margin: 0px 0px 0px 0px;
		/* border: 1px solid blue; */
	}

	.itemList {
		/* padding-top: 20px; */
		display: grid;
		margin: auto;
		text-align: center;
		justify-content: center;
		grid-template-columns: repeat(3, 1fr); 
		/* grid-template-columns: 2fr 1fr;  */
		column-gap: 10px;
		row-gap: 10px;
		/* align-self:flex-end; */
		/* border: 1px solid red; */
	}

	.name {
		font-size: 12px;
		line-height: 10px;
		margin: auto;
		/* border: 1px solid red; */
    }
    .price {
 		font-size: 12px;
		 line-height: 10px;
		 margin: auto;
		 /* border: 1px solid blue; */
	 }
		/* img { width:var(--width); height: var(--height); } */
	</style>

