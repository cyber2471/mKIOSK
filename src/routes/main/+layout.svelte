
<script>
  function goPath(param)
  {
    location.href = param;
  }

  import Logo from "$lib/assets/logo.png"
  import KOR from "$lib/assets/KOR.png"
  import JAN from "$lib/assets/JAN.png"
  import VTM from "$lib/assets/VTM.png"
  import USA from "$lib/assets/USA.png"
  import CHA from "$lib/assets/CHA.png"
 // import logo from "https://www.astems.co.kr/home/images/logo_20200515.png"

</script>

<svelte:head>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/css/bootstrap.min.css" integrity="sha384-DhY6onE6f3zzKbjUPRc2hOzGAdEf4/Dz+WJwBvEYL/lkkIsI3ihufq9hk9K4lVoK" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</svelte:head>

  <center>
<br>
    <div class="kiosk-hcell">
      <div class="kiosk-dcell">
        <input type=button class="btn btn-primary" on:click={()=>goPath('/')}  value='처음으로'>
      </div>
      <div class="kiosk-dcell">
        <img style="width:170px; height:35px" src='https://www.astems.co.kr/home/images/logo_20200515.png' alt='logo' />
      </div>
      <div class="kiosk-dcell">   
        <img class=flag src={KOR} alt='KOR' on:click={()=>goPath('/settings')}  value='국가별 언어아이콘'/>   
        <img class=flag src={VTM} alt='VTM' on:click={()=>goPath('/settings')}  value='국가별 언어아이콘'/>
        <img class=flag src={CHA} alt='CHA' on:click={()=>goPath('/settings')}  value='국가별 언어아이콘'/>
        <img class=flag src={JAN} alt='JAN' on:click={()=>goPath('/settings')}  value='국가별 언어아이콘'/>
        <img class=flag src={USA} alt='USA' on:click={()=>goPath('/settings')}  value='국가별 언어아이콘'/>
        <!--<input type=button on:click={()=>goPath('/settings')}  value='국가별 언어아이콘'> --> 
      </div>
    </div>
<br>
  </center>


  <slot></slot>
 
<style>
	.kiosk-hcell {
    /* border:1px solid rgb(245, 6, 6); */
		width: 100%;
		height: 100%;
		display: grid;
		/* grid-template-columns: 10% 65% 5% 5% 5% 5% 5%; */
    grid-template-columns: 35% 40% 25%;
		grid-gap: 2px;
		padding: 1px;
		margin: 0px;
        background-color: white;
	} 

  .kiosk-dcell {
    /* border:1px solid rgb(21, 5, 253); */
		/* display: grid; */
		/* grid-template-columns: 100px; */
		grid-gap: 2px;
		padding: 1px;
		margin: 0px;
    background-color: white;
	} 
nav { 
        margin-top: 0px;
      }

  .flag {
      width: 40px; height: 30px; cursor:hand;
  }
  header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid lightgray;
        padding-left: 4vw;
        padding-right: 4vw;
    }

    nav {
        display: flex;
        align-items: center;
        align-self: auto;
        border-bottom: 1px solid lightgray;
        padding-left: 4vw;
        padding-right: 4vw;
    }

    h1 {                                                 
        margin: 5;
        font-weight: 400;
        font-size: 25px;
    }

    center {
      border-bottom: 1px solid lightgray;
      vertical-align: middle;
    }

</style>