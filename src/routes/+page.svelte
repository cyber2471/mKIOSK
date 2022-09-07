<script>

function goPage() {
  location.href = "/main"
}

import VIDEO from "$lib/assets/Woman.mp4";
import IMG_02 from "$lib/assets/main_02.png";

</script>

<main>
	<div class="kiosk-container" on:click={goPage}>
		<div class="kiosk-rowitem"> 
			<video autoplay loop controls  >
			<source src={VIDEO} type="video/mp4"> 
			<strong>Your browser does not support the video tag.</strong>
		  </video>
		</div>
		<div class="kiosk-rowitem">
			<center>
			<img class=img2 src={IMG_02} alt='image-02' >
		</center>
		</div>
		<div class="kiosk-rowitem">Item 3</div>
	</div>
</main>


<style>
	video { max-width: 100%; display: block; margin: 0px auto; }
	.kiosk-container {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-rows: repeat(3, 1fr);
		grid-gap: 2px;

		padding: 1px;
		margin: 0px;
        background-color: white;
	} 

	.img2 {
		width:500px; height: 400px; align: center;
	}
	.kiosk-rowitem {
		display: grid;
		margin: 1px;
        padding: 10px;
		
        background-color: #f3f4f5;
	}
/*
	.kiosk-rowitem:nth-child(1) { grid-row: 1 / span 2; }
	*/
</style>